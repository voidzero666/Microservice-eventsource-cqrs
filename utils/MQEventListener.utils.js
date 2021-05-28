const amqp = require('amqplib/callback_api');

const taxiwayDenormalize = require('../controllers/denorm/taxiwayDenormalize.controller');
const runwayDenormalize = require('../controllers/denorm/runwayDenormalize.controller');
const fueltankDenormalize = require('../controllers/denorm/fueltankDenormalize.controller');
const airplaneDenormalize = require('../controllers/denorm/airplaneDenormalize.controller');

const eventStore = require('../models/eventStore.model');

const { MQ_URL } = process.env;
const queue = 'airside';

amqp.connect(MQ_URL, (connectionError, connection) => {
  if (connectionError) throw connectionError;

  // Idempotent: Create channel IF channel not exist
  connection.createChannel((channelError, channel) => {
    if (channelError) throw channelError;
    console.info('Connected to RabbitMQ');

    channel.assertQueue(queue, { durable: false });

    // Subscribe and listen to fired events
    channel.consume(
      queue,
      (message) => {
        try {
          const { eventType, object } = JSON.parse(
            message.content.toString()
          );

          //store event to rebuild the state at a later time
         const event = new eventStore({
            sEventType: eventType,
            sObject: object
          });

          event.save(async (err) => {
            if (err) console.warn(err)

            console.log(event)
          });
        
          //resolve the event type
          switch (eventType) {
            //taxiway events
            case 'createTaxiway':
              taxiwayDenormalize.TaxiwayCreate(object);
              break;
            case 'updateTaxiway':
              taxiwayDenormalize.TaxiwayUpdate(object);
              break;
            case 'deleteTaxiway':
              taxiwayDenormalize.TaxiwayDelete(object);
              break;
            //runway
            case 'createRunway':
              runwayDenormalize.RunwayCreate(object);
              break;
            case 'updateRunway':
              runwayDenormalize.RunwayUpdate(object);
              break;
            case 'deleteRunway':
              runwayDenormalize.RunwayDelete(object);
              break;
            //auxillary fuel tank events
            case 'createFueltank':
              fueltankDenormalize.FueltankCreate(object);
              break;
            case 'updateFueltank':
              fueltankDenormalize.FueltankUpdate(object);
              break;
            case 'deleteFueltank':
              fueltankDenormalize.FueltankDelete(object);
              break;
              //airplane from queue
            case 'createAirplane':
              airplaneDenormalize.AirplaneCreate(object);
              break;
            case 'updateAirplane':
              airplaneDenormalize.AirplaneUpdate(object);
              break;
            case 'deleteAirplane':
              airplaneDenormalize.AirplaneDelete(object);
              break;
            default:
              console.warn('Event Type Unknown');
              break;
          }
        } catch (notJsonException) {
          console.warn(notJsonException);
        }
      },
      { noAck: true }
    );
  });
});
