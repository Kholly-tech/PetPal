const bcrypt = require('bcryptjs');
const validator = require('@Helpers/validationSchema');
const Joi = require('joi');
const { resSender, generateTokens, saveCookie } = require('../../Helpers');
const {User} = require('../../Models');

const signIn = async (req, res) => {
    try {
        const {identifier, password} = req.body;

        // Validate Inputs
        const signInSchema = Joi.object({
            identifier: validator.identifier,
            password: validator.password
        });
        const {error} = signInSchema.validate(req.body);
        if(error) return resSender(res, 400, error.details[0].message, 'error');

        // Check if user exists
        const user = await User.findOne({
            $or: [
                {email: identifier},
                {username: identifier}
            ]
        });
        if(!user) return resSender(res, 400, 'Invalid credentials', 'error');

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return resSender(res, 400, 'Invalid credentials', 'error');

        // Generate Token
        const [token,refreshToken] = await Promise.all([
            generateTokens(user._id, process.env.JWT_ACCESS, '1d'),
            generateTokens(user._id, process.env.JWT_REFRESH, '7d')
        ]);

        let data = {
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                username: user.username,
                profilePicture: user.profilePicture,
                isVerified: user.isVerified,
            },
            token
        };

        saveCookie(res, 'prst', refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: 'strict'
        });
        return resSender(res, 200, 'Log In Successful', 'success', data);
    } catch (error) {
        console.log(error);
        resSender(res, 500, 'Server error', 'error');
    }
}

module.exports = {
    signIn
}