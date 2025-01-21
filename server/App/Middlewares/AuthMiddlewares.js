const {resSender, verifyToken, modifyUserResponse} = require('../Helpers');
const { User } = require('../Models');
const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        // console.log('Auth Header: ', authHeader);

        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return resSender(res, 401, "Authorization header missing or invalid", 'fail', null);
        };

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token, process.env.JWT_ACCESS);
        // console.log('Decoded: ',decoded);

        let user = await User.findById(decoded.id);
        if(!user) return resSender(res, 401, "User not found", 'fail', null);

        // console.log('User: ', user);
        req.user = modifyUserResponse(user);

        // console.log('User: ', req.user);

        next();
    } catch (error) {
        if(error.name === 'TokenExpiredError') {
            return resSender(res, 401, "Token expired", 'fail', null);
        }

        return resSender(res, 500, "Invalid Token", 'error', null);
    }
}

module.exports = authMiddleware;