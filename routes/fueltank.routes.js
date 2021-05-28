const router = require('express').Router();

//auxillary fuel tanks
const fueltankwayCommand = require('../controllers/command/fueltankCommand.controller');
const fueltankQuery = require('../controllers/query/fueltankQuery.controller');

//command instructions

// command
router.post('/', fueltankwayCommand.FueltankCreate);
router.put('/:id', fueltankwayCommand.FueltankUpdate);
router.delete('/:id', fueltankwayCommand.FueltankDelete);

// query
router.get('/:id', fueltankQuery.FueltankRead);
router.get('/', fueltankQuery.FueltankGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
