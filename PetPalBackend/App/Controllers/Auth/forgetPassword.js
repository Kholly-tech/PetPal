const Joi = require("joi");
const { resSender } = require("../../Helpers");
const validator = require('../../Helpers/validationSchema');
const { User } = require("../../Models");

const forgetPassword = async (req, res) => {
    try {
        const {email} = req.body;
        const schema = Joi.object({
            email : validator.email
        });
        const {error} = schema.validate(req.body);
        if (error) return resSender(res, 403, error.details[0].message, 'fail');

        let user = await User.findOne({email});
        if(!user) return resSender(res, 404, 'User not found', 'fail');

        // Send Mail.

        // End send mail

        return resSender(res, 200, 'Mail Sent', 'success');
    } catch (error) {
        console.log(error);
        return resSender(res, 500, 'Server Error', 'error');
    }
};

module.exports = forgetPassword;