const router = require('express').Router();

//runway
const runwayCommand = require('../controllers/command/runwayCommand.controller');
const runwayQuery = require('../controllers/query/runwayQuery.controller');


// command instruction
router.post('/', runwayCommand.RunwayCreate);
router.put('/:id', runwayCommand.RunwayUpdate);
router.delete('/:id', runwayCommand.RunwayDelete);

// query instructions
router.get('/:id', runwayQuery.RunwayRead);
router.get('/', runwayQuery.RunwayGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;

