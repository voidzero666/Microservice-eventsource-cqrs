const router = require('express').Router();

//controllers for seperated read and write models taxiway
const taxiwayCommand = require('../controllers/command/taxiwayCommand.controller');
const taxiwayQuery = require('../controllers/query/taxiwayQuery.controller');

// command instruction
router.post('/', taxiwayCommand.TaxiwayCreate);
router.put('/:id', taxiwayCommand.TaxiwayUpdate);
router.delete('/:id', taxiwayCommand.TaxiwayDelete);

// query instructions
router.get('/:id', taxiwayQuery.TaxiwayRead);
router.get('/', taxiwayQuery.TaxiwayGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
