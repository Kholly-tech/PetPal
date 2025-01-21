const {authMiddleware} = require('@Middlewares');
const { signIn, signUp, forgetPassword } = require('../Controllers/Auth');

const router = require('express').Router();


router.post('/auth/signin', signIn);
router.post('/auth/signup', signUp);
router.post('/auth/forget-password', forgetPassword);


module.exports = router;