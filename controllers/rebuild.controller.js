const fueltankReplay = require('../replayModels/fueltank.replay');
const taxiwayReplay = require('../replayModels/taxiway.replay');
const runwayReplay = require('../replayModels/runway.replay');
const airplaneReplay = require('../replayModels/airplane.replay');
const mongoose = require('mongoose');

let fueltanks = [];
let runways = [];
let taxiways = [];
let airplanes = [];

const FueltankGetAll = (req, res, next) => {
    return res.status(200).json(fueltanks).end();
};

const FueltankRead = (req, res, next) => {
    const found = fueltanks.find(element => element._id = req.params.id);

    return res.status(200).json(found).end();
};

const FueltankCreate = (fueltank) => {
    const fueltankNew = new fueltankReplay(fueltank);
    fueltanks.push(fueltankNew);
};
  
const FueltankUpdate = (fueltank) => {
    const found = fueltanks.find(element => element._id = fueltank._id);
    const index = fueltanks.indexOf(found);
    fueltanks[index] = fueltank;
};

const FueltankDelete = async (fueltank) => {
    const found = fueltanks.find(element => element._id = fueltank._id);
    const index = fueltanks.indexOf(found);
    if (index > -1) {
        fueltanks.splice(index, 1);
    }
};

const RunwayGetAll = (req, res, next) => {
    return res.status(200).json(fueltanks).end();
};

const RunwayRead = (req, res, next) => {
    const found = runways.find(element => element._id = req.params.id);

    return res.status(200).json(found).end();
};

const RunwayCreate = (runway) => {
    const RunwayNew = new runwayReplay(runway);
    runways.push(RunwayNew);
};
  
const RunwayUpdate = (runway) => {
    const found = runways.find(element => element._id = runway._id);
    const index = runways.indexOf(found);
    runways[index] = runway;
};

const RunwayDelete = async (runway) => {
    const found = runways.find(element => element._id = runway._id);
    const index = runways.indexOf(found);
    if (index > -1) {
        runways.splice(index, 1);
    }
};

const TaxiwayGetAll = (req, res, next) => {
    return res.status(200).json(taxiways).end();
};

const TaxiwayRead = (req, res, next) => {
    const found = taxiways.find(element => element._id = req.params.id);

    return res.status(200).json(found).end();
};

const TaxiwayCreate = (taxiway) => {
    const taxiwayNew = new taxiwayReplay(taxiway);
    taxiways.push(taxiwayNew);
};
  
const TaxiwayUpdate = (taxiway) => {
    const found = taxiways.find(element => element._id = taxiway._id);
    const index = taxiways.indexOf(found);
    taxiways[index] = taxiway;
};

const TaxiwayDelete = async (taxiway) => {
    const found = taxiways.find(element => element._id = taxiway._id);
    const index = taxiways.indexOf(found);
    if (index > -1) {
        taxiways.splice(index, 1);
    }
};

const AirplaneGetAll = (req, res, next) => {
    return res.status(200).json(airplanes).end();
};

const AirplaneRead = (req, res, next) => {
    const found = airplanes.find(element => element._id = req.params.id);

    return res.status(200).json(found).end();
};

const AirplaneCreate = (airplane) => {
    const airplaneNew = new airplaneReplay(airplane);
    airplanes.push(airplaneNew);
};
  
const AirplaneUpdate = (airplane) => {
    const found = airplanes.find(element => element._id = airplane._id);
    const index = airplanes.indexOf(found);
    airplanes[index] = airplane;
};

const AirplaneDelete = async (airplane) => {
    const found = airplanes.find(element => element._id = airplane._id);
    const index = airplanes.indexOf(found);
    if (index > -1) {
        airplanes.splice(index, 1);
    }
};

function emptyRebuiltStore() {
    fueltanks = [];
    runways = [];
    taxiways = [];
    airplanes = [];
};

module.exports = {
    FueltankCreate,
    FueltankGetAll,
    FueltankRead,
    FueltankUpdate,
    FueltankDelete,
    RunwayGetAll,
    RunwayRead,
    RunwayCreate,
    RunwayUpdate,
    RunwayDelete,
    TaxiwayGetAll,
    TaxiwayRead,
    TaxiwayCreate,
    TaxiwayUpdate,
    TaxiwayDelete,
    AirplaneGetAll,
    AirplaneRead,
    AirplaneCreate,
    AirplaneUpdate,
    AirplaneDelete,
    emptyRebuiltStore,
};
  