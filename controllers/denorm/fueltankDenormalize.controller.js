const FueltankRead = require('../../models/read/fueltankRead.model');

const FueltankCreate = (fueltank) => {
  const fueltankNew = new FueltankRead(fueltank);

  fueltankNew.save((err) => {
    if (err) console.error(err);
  });
};

const FueltankUpdate = (fueltank) => {
  FueltankRead.findByIdAndUpdate(fueltank._id, { $set: fueltank }, (err) => {
    if (err) console.error(err);
  });
};

const FueltankDelete = (fueltank) => {
  FueltankRead.findByIdAndRemove(fueltank._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
  FueltankCreate,
  FueltankUpdate,
  FueltankDelete,
};
