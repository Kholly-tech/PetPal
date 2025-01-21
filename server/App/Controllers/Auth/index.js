const forgetPassword = require("./forgetPassword");
const { signIn } = require("./SignIn");
const { signUp } = require("./SignUp");

module.exports = {
    signIn,
    signUp,
    forgetPassword,
}