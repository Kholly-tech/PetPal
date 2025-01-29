const { signIn, signUp, forgetPassword, refreshToken } = require('../Controllers/Auth');

const router = require('express').Router();


router.post('/auth/signin', signIn);
router.post('/auth/signup', signUp);
router.post('/auth/forget-password', forgetPassword);
router.put('/auth/refresh', refreshToken);

module.exports = router;