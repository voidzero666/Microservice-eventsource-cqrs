const FueltankReadModel = require('../../models/read/fueltankRead.model');

const FueltankRead = (req, res, next) => {
  FueltankReadModel.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const FueltankGetAll = (req, res, next) => {
  FueltankReadModel.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    FueltankRead,
    FueltankGetAll,
};
