const {cloudinary} = require('../Config')
const mediaUpload = async(file, path) => {
    try {
        console.log('Uploading File: ', file);
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: 'auto',
            folder: path
        });
        // console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

const fetchMedia = async (url) => {
    try {
        const optUrl = await cloudinary.url(url,{
            fetch_format: 'auto',
            quality: 'auto'
        });
        console.log(optUrl);
        return optUrl;
    } catch (error) {
        throw error;
    }
}

const deleteMedia = async (public_id, type) => {
    try {
        const result = await cloudinary.api.delete_resources([public_id], {
            resource_type: type,
            type: 'upload'
        });
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    mediaUpload,
    fetchMedia,
    deleteMedia,
}