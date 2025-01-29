const Joi = require("joi");
const { resSender, mediaUpload } = require("../../Helpers");
const validator = require("../../Helpers/validationSchema");
const { removeTempFile } = require("../../Middlewares");

const uploadMedia = async (req, res) => {
    try {
        const userId = req.user._id;
        const { path } = req.body;
        const schema = Joi.object({
            path: validator.strings
        });
        const { error } = schema.validate(req.body);
        if (error) return resSender(res, 400, error.details[0].message, 'fail');

        let files = Object.values(req.files).flat();
        let medias = [];

        // Upload files
        for (const file of files) {
            console.log('Uploading');
            let res = await mediaUpload(file, path);
            let mediaData = {
                public_id: res.public_id,
                url: res.secure_url,
                type: res.resource_type,
            }
            console.log(mediaData);
            medias.push(mediaData);

            // Remove temporary files
            removeTempFile(file.tempFilePath);
        }

        return resSender(res, 200, 'Upload successful', 'success', medias);
    } catch (error) {
        console.log(error);
        return resSender(res, 500, error.message, 'error');
    }
}

module.exports = {
    uploadMedia
}