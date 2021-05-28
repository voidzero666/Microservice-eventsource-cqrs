const RunwayRead = require('../../models/read/runwayRead.model');

const RunwayCreate = (runway) => {
  const runwayNew = new RunwayRead(runway);

  runwayNew.save((err) => {
    if (err) console.error(err);
  });
};

const RunwayUpdate = (runway) => {
    RunwayRead.findByIdAndUpdate(runway._id, { $set: runway }, (err) => {
    if (err) console.error(err);
  });
};

const RunwayDelete = (runway) => {
    RunwayRead.findByIdAndRemove(runway._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
    RunwayCreate,
    RunwayUpdate,
    RunwayDelete,
};
