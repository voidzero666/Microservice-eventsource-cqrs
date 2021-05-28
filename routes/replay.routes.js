const router = require('express').Router();
const replayUtility = require('../utils/replayEvents.util');
const queryRebuilt = require('../controllers/rebuild.controller');

// replay until event Nr
router.post('/', replayUtility.replayEvents);
router.delete('/', replayUtility.deleteEventStore);

// query rebuilt state
router.get('/fueltankReplay/:id', queryRebuilt.FueltankRead);
router.get('/fueltankReplay/', queryRebuilt.FueltankGetAll);

router.get('/runwayReplay/:id', queryRebuilt.RunwayRead);
router.get('/runwayReplay/', queryRebuilt.RunwayGetAll);

router.get('/taxiwayReplay/:id', queryRebuilt.TaxiwayRead);
router.get('/taxiwayReplay/', queryRebuilt.TaxiwayGetAll);

router.get('/airplaneReplay/:id', queryRebuilt.AirplaneRead);
router.get('/airplaneReplay/', queryRebuilt.AirplaneGetAll);


router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
