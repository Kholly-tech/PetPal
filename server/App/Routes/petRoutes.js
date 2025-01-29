const router = require('express').Router();
const { adoptPet, cancelAdoption, addPet } = require('../Controllers/Pet');
const {authMiddleware, adminMiddleware} = require('../Middlewares');

router.post('/pet/adopt', authMiddleware, adoptPet);
router.post('/pet/cancel/:adoptionId', authMiddleware, cancelAdoption);
router.post('/pet/add', authMiddleware, adminMiddleware, addPet);

module.exports = router;