const adminMiddleware = require("./adminMiddleware");
const authMiddleware = require("./AuthMiddlewares");
const { uploadMiddleware, removeTempFile } = require("./uploadMiddlewares");


module.exports = {
    authMiddleware,
    adminMiddleware,
    uploadMiddleware,
    removeTempFile
}