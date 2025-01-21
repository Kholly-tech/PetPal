import { getDataAPI } from "../../utils/api";

export const getUser = async() => {
    try {
        const res = await getDataAPI('user');
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};