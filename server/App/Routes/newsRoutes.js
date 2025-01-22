const { regForNewsLetter } = require('../Controllers/NewsLetter');

const router = require('express').Router();

router.post('/news/reg',regForNewsLetter);

module.exports = router;