const { resSender } = require("../../Helpers")

const getUser = (req, res) => {
    try {
        const user = req.user;
        return resSender(res, 200, "User fetched successfully", 'success', user);
    } catch (error) {
        return resSender(res, 500, "Server Error", 'error', null);
    }
}

module.exports = {
    getUser,
}