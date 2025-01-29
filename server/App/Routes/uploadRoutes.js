const { uploadMedia } = require('../Controllers/Upload');
const { authMiddleware, uploadMiddleware } = require('../Middlewares');

const router = require('express').Router();

router.post('/media/upload', authMiddleware, uploadMiddleware,uploadMedia);

module.exports = router;