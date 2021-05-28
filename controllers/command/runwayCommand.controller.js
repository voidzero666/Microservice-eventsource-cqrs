const Runway = require('../../models/write/runway.model');
const MQService = require('../../utils/MQService.utils');

const RunwayCreate = (req, res, next) => {
  const RunwayNew = new Runway({
    operationId: req.body.operationId,
    length: req.body.length,
    width: req.body.width,
  });

  RunwayNew.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createRunway', object: RunwayNew })
    );
    return res.status(200).json(RunwayNew).end();
  });
};

const RunwayUpdate = async (req, res, next) => {
  Runway.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airside',
      JSON.stringify({
        eventType: 'updateRunway',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const RunwayDelete = (req, res, next) => {
  Runway.findByIdAndRemove(req.params.id, async (err, runway) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'deleteRunway', object: runway })
    );
    return res.status(200).json('Runway removed.').end();
  });
};

module.exports = {
  RunwayCreate,
  RunwayUpdate,
  RunwayDelete,
};
