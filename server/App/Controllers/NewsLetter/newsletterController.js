const Joi = require("joi");
const { resSender } = require("../../Helpers");
const validator = require("../../Helpers/validationSchema");
const { NewsLetter, User } = require("../../Models");

const regForNewsLetter = async (req, res) => {
    try {
        const {email} = req.body;
        const schema = Joi.object({
            email : validator.email
        });
        const {error} = schema.validate(req.body);
        if(error) return resSender(res, 400, error.details[0].message, 'fail');

        // Check if email exists
        const isExists = await NewsLetter.findOne({email});
        if(isExists) return resSender(res, 403, 'You have already subscribed', 'fail');

        // Check if email is a member
        const isMember = await User.findOne({email});


        const newLetter = new NewsLetter({
            email,
            isMember: !!isMember,
            userId: isMember ? isMember._id : null
        });
        await newLetter.save();

        return resSender(res, 200, 'Successful', 'success', {newLetter});
    } catch (error) {
        // console.log(error);
        return resSender(res, 500, 'Server Error', 'error');
    }
}

module.exports = {
    regForNewsLetter,
}