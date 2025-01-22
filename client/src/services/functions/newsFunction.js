import {postDataAPI} from '../../utils/api';

export const regForNews = async (email) => {
    try {
        const res = await postDataAPI('news/reg',{email});
        return res;
    } catch (error) {
        throw error;
    }
}