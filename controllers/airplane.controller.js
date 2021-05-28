const AirplaneReadMdl = require('../models/read/airplane.model');

const AirplaneRead = (req, res, next) => {
  AirplaneReadMdl.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const AirplaneGetAll = (req, res, next) => {
  AirplaneReadMdl.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    AirplaneRead,
    AirplaneGetAll,
};
