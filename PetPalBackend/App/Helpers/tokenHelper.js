const jwt = require("jsonwebtoken");

const generateTokens = (id, signature, expiresIn) => {
    try {
        return jwt.sign({id}, signature, {expiresIn});

    } catch (error) {
        throw error;
    }
};

const verifyToken = (token, signature) => {
    try {
        return jwt.verify(token, signature);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    generateTokens,
    verifyToken,
}