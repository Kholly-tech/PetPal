const { resSender, generateTokens, verifyToken, getCookie } = require("../../Helpers");
const { User } = require("../../Models");


const refreshToken = async (req, res) => {
    try {
        const refreshToken = getCookie(req, 'prst');
        if(!refreshToken) return resSender(res, 402, 'Unauthorized', 'error');

        const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH);
        if(!decoded) return resSender(res, 402, 'Unauthorized', 'error');

        const user = await User.findById(decoded.id);
        if(!user) return resSender(res, 402, 'Unauthorized', 'error');
        const  accessToken = generateTokens(user._id, process.env.JWT_ACCESS, '1d');
        if(!accessToken) return resSender(res, 402, 'Unauthorized', 'error');

        return resSender(res, 200, 'Token refreshed', 'success', {accessToken});
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

module.exports = refreshToken;