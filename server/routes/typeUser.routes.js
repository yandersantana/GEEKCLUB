const express = require('express');
const router = express.Router();

const typeUser = require('../controllers/typeUser.controller');

router.get('/', typeUser.getTypeUsers);
router.post('/', typeUser.createTypeUser);
router.get('/:id', typeUser.getTypeUser);
router.put('/:id', typeUser.editTypeUser);
router.delete('/:id', typeUser.deleteTypeUser);

module.exports = router;