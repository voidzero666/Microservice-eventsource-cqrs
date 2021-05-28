//Rebuild states and DB by replaying events.
const eventStore = require('../models/eventStore.model');
const replayController = require('../controllers/rebuild.controller');

const replayEvents = async (req, res, next) => {

    const rebuildDateTime = req.body.date;
    let results = [];

    if(!req.body.date){
        results = await eventStore.find().sort({ createdAt: 'asc'});
        console.warn("rebuild full state");
    }else {
        results = await eventStore.find().where('createdAt').lte(rebuildDateTime).sort({ createdAt: 'asc'}); 
        console.warn("rebuild state at date");
    }

    //empty replay db before replaying the events
    replayController.emptyRebuiltStore();
  
    if (!Array.isArray(results)) {
        return res.status(500).json('State could not be rebuilt, event not an array').end();
    }
    console.warn(results)

    results.forEach(event => {
        resolveEvent(event);
    })
    return res.status(200).json('State rebuilt, you can now query the rebuilt state').end();
};

const deleteEventStore = (req, res, next) => {
    eventStore.deleteMany({}, function(err) {
        if (err) return res.status(500).json('Couldnt empty eventStore').end();  
    });

    return res.status(200).json('Emptied out eventStore').end();

};

async function resolveEvent(event){
    const eventType = event.sEventType
    const object = event.sObject

    console.warn("replay")
   // console.warn(event)
    console.warn(eventType)
    //console.warn(object)

    switch (eventType) {
        
        //taxiway events
        case 'createTaxiway':
          replayController.TaxiwayCreate(object);
          break;
        case 'updateTaxiway':
          replayController.TaxiwayUpdate(object);
          break;
        case 'deleteTaxiway':
          replayController.TaxiwayDelete(object);
          break;
        //runway
        case 'createRunway':
          replayController.RunwayCreate(object);
          break;
        case 'updateRunway':
          replayController.RunwayUpdate(object);
          break;
        case 'deleteRunway':
          replayController.RunwayDelete(object);
          break;
          
        //auxillary fuel tank events
        case 'createFueltank':
          replayController.FueltankCreate(object);
          break;
        case 'updateFueltank':
          replayController.FueltankUpdate(object);
          break;
        case 'deleteFueltank':
          replayController.FueltankDelete(object);
         //airplane from queue
        case 'createAirplane':
          replayController.AirplaneCreate(object);
          break;
        case 'updateAirplane':
          replayController.AirplaneUpdate(object);
          break;
        case 'deleteAirplane':
          replayController.AirplaneDelete(object);
        default:
          console.warn('Replay Event Type Unknown, ignoring event');
          break;
      }
}
  
module.exports = {
    replayEvents,
    deleteEventStore,
};
  
  