const AirplaneReadMdl = require('../../models/read/airplane.model');

const AirplaneCreate = (airplane) => {
  const airplaneNew = new AirplaneReadMdl(airplane);

  airplaneNew.save((err) => {
    if (err) console.error(err);
  });
};

const AirplaneUpdate = (airplane) => {
  AirplaneReadMdl.findByIdAndUpdate(airplane._id, { $set: airplane }, (err) => {
    if (err) console.error(err);
  });
};

const AirplaneDelete = (airplane) => {
  AirplaneReadMdl.findByIdAndRemove(airplane._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
  AirplaneCreate,
  AirplaneUpdate,
  AirplaneDelete,
};
