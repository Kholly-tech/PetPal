const { resSender } = require("../Helpers")
const fs = require('fs');

let FILE_SIZE = 20; // 20MB
const uploadMiddleware = async (req, res, next) => {
    try {
        console.log('Req Files: ', req.files);
        if(!req.files || Object.values(req.files).flat().length === 0){
            return resSender(res, 400, 'Media file is required', 'fail');
        }

        let files = Object.values(req.files).flat();
        files.forEach((file) => {

            // Check file size
            if(file.size > 1024 * 1024 * 20){
                removeTempFile(file.tempFilePath);
                return resSender(res, 400, 'File size is too large', 'fail');
            }

            // Check file type
            if(!(file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/"))) {
                removeTempFile(file.tempFilePath);
                return resSender(res, 400, 'File format isnot supported', 'fail');
            }
        });

        next();
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

const removeTempFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if(err) throw err;
    });
}

module.exports = {
    uploadMiddleware,
    removeTempFile,
}