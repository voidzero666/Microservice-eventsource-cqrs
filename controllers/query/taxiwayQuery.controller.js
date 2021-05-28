const TaxiwayReadModel = require('../../models/read/taxiwayRead.model');

const TaxiwayRead = (req, res, next) => {
    TaxiwayReadModel.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const TaxiwayGetAll = (req, res, next) => {
    TaxiwayReadModel.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    TaxiwayRead,
    TaxiwayGetAll,
};
