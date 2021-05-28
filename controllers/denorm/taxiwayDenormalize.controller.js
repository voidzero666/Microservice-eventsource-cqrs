const TaxiwayRead = require('../../models/read/taxiwayRead.model');

const TaxiwayCreate = (taxiway) => {
  const taxiwayNew = new TaxiwayRead(taxiway);

  taxiwayNew.save((err) => {
    if (err) console.error(err);
  });
};

const TaxiwayUpdate = (taxiway) => {
    TaxiwayRead.findByIdAndUpdate(taxiway._id, { $set: taxiway }, (err) => {
    if (err) console.error(err);
  });
};

const TaxiwayDelete = (taxiway) => {
    TaxiwayRead.findByIdAndRemove(taxiway._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
    TaxiwayCreate,
    TaxiwayUpdate,
    TaxiwayDelete,
};
