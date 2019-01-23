const express = require('express');
const router = express.Router();

const people = require('../controllers/people.controller');

router.get('/', people.getPeople);
router.post('/', people.createPeople);
router.get('/:id', people.getPerson);
router.put('/:id', people.editPeople);
router.delete('/:id', people.deletePeople);

module.exports = router;