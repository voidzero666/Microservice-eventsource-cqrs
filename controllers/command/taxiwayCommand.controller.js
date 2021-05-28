const Taxiway = require('../../models/write/taxiway.model');
const MQService = require('../../utils/MQService.utils');

const TaxiwayCreate = (req, res, next) => {
  const TaxiwayNew = new Taxiway({
    operationId: req.body.operationId,
  });

  TaxiwayNew.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createTaxiway', object: TaxiwayNew })
    );
    //preperation for notification bus
    /*
    await MQService.sendMessage(
      'notification',
      JSON.stringify({ eventType: 'createTaxiway', Taxiway: TaxiwayNew })
    );
    */
    return res.status(200).json(TaxiwayNew).end();
  });
};

const TaxiwayUpdate = async (req, res, next) => {
    Taxiway.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airside',
      JSON.stringify({
        eventType: 'updateTaxiway',
        object: { _id: req.params.id, ...req.body },
      })
    );
    /*
    await MQService.sendMessage(
      'notification',
      JSON.stringify({
        eventType: 'updateCustomer',
        customer: { _id: req.params.id, ...req.body },
      })
    );
    */
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const TaxiwayDelete = (req, res, next) => {
    Taxiway.findByIdAndRemove(req.params.id, async (err, taxiway) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'deleteTaxiway', object: taxiway })
    );
    /*
    await MQService.sendMessage(
      'notification',
      JSON.stringify({ eventType: 'deleteTaxiway', taxiway })
    );
    */
    return res.status(200).json('Taxiway removed.').end();
  });
};

module.exports = {
  TaxiwayCreate,
  TaxiwayUpdate,
  TaxiwayDelete,
};
