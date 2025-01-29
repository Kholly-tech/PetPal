import { postMediaAPI } from '../../utils/api';
import dataURItoBlob from '../helpers/dataUriToBlob';

export const uploadMedia = async (filesData) => {
    try {
        let formData = new FormData();
        formData.append('path', filesData.path || 'default');

        // Handle Blob, data URIs & File Objects 
        const mediaFiles = filesData.files.map((file, index) => {
            if(file instanceof Blob){
                const ext = file.type.split('/')[1]; // Extract extension from mime type
                return new File([file], `file_${index}.${ext}`, {
                    type: file.type
                });
            } else if(typeof file === 'string' && file.startsWith('data:')) {
                return dataURItoBlob(file); // convert data string to Blob
            } else if(file instanceof File) {
                return file;
            } else {
                throw new Error('Invalid media file format');
            }
        });

        mediaFiles.forEach((file,index) => {
            formData.append('file', file, file.name || `file_${index}`);
        });

        // post formData using api call
        const res = await postMediaAPI('media/upload', formData)
        return res.data;
    } catch (error) {
        console.error('Error uploading Media: ', error);
        throw error;
    }
}

// export const