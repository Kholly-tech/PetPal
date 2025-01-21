const { getUser } = require('../Controllers/User');
const { authMiddleware } = require('../Middlewares');

const router = require('express').Router();

router.get('/user/', authMiddleware, getUser);

module.exports = router;