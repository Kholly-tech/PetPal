const Joi = require('joi');
const bcrypt = require('bcryptjs');
const validator = require('../../Helpers/validationSchema');
const { resSender, generateTokens } = require('../../Helpers');
const { User } = require('../../Models');

const signUp = async (req, res) => {
    try {
        const { first_name, last_name, username, email, gender, password } = req.body;
        const signUpSchema = Joi.object({
            first_name: validator.firstName,
            last_name: validator.lastName,
            username: validator.username,
            email: validator.email,
            password: validator.password,
            gender: validator.gender,
        });

        const { error } = signUpSchema.validate(req.body);
        if (error) return resSender(res, 400, error.details[0].message, 'error');

        const existingUser = await User.findOne({
            $or: [
                {email},
                {username}
            ]
        });

        if(existingUser) return resSender(res, 403, 'User exists', 'fail');

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            first_name,
            last_name,
            username,
            email,
            gender,
            password: hashedPassword,
        });
        await newUser.save();

        // const [token, refreshToken] = await Promise.all([
        //     generateTokens(newUser._id, process.env.JWT_ACCESS, '1d'),
        //     generateTokens(newUser._id, process.env.JWT_REFRESH, '7d')
        // ]);

        return resSender(res, 200, 'Account registered Successfully', 'success');

    }
    catch (error) {
        // console.log(error);
        resSender(res, 500, 'Server error', 'error');
    }
};

module.exports = {
    signUp
}