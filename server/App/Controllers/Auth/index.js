const forgetPassword = require("./forgetPassword");
const refreshToken = require("./refreshToken");
const { signIn } = require("./SignIn");
const { signUp } = require("./SignUp");

module.exports = {
    signIn,
    signUp,
    forgetPassword,
    refreshToken,
}