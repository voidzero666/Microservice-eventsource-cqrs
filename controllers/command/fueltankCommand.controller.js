const Fueltank = require('../../models/write/fueltank.model');
const MQService = require('../../utils/MQService.utils');

const FueltankCreate = (req, res, next) => {
  const FueltankNew = new Fueltank({
    currentFuelLevel: req.body.currentFuelLevel,
    FuelCapacity: req.body.FuelCapacity
  });

  FueltankNew.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createFueltank', object: FueltankNew })
    );
    return res.status(200).json(FueltankNew).end();
  });
};

const FueltankUpdate = async (req, res, next) => {
  Fueltank.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airside',
      JSON.stringify({
        eventType: 'updateFueltank',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const FueltankDelete = (req, res, next) => {
  Fueltank.findByIdAndRemove(req.params.id, async (err, fueltank) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'deleteFueltank', object: fueltank })
    );
    return res.status(200).json('Fueltank removed.').end();
  });
};

module.exports = {
  FueltankCreate,
  FueltankUpdate,
  FueltankDelete,
};
