const RunwayReadModel = require('../../models/read/runwayRead.model');

const RunwayRead = (req, res, next) => {
  RunwayReadModel.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const RunwayGetAll = (req, res, next) => {
  RunwayReadModel.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    RunwayRead,
    RunwayGetAll,
};
