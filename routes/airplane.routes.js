const router = require('express').Router();

//auxillary fuel tanks
const airplaneController = require('../controllers/airplane.controller');

//command instructions

// query
router.get('/:id', airplaneController.AirplaneRead);
router.get('/', airplaneController.AirplaneGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
