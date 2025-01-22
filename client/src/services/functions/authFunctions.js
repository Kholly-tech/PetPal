import { postDataAPI } from "../../utils/api";
import Cookies from 'js-cookie';

export const signin = async (userData) => {
    try {
        const res = await postDataAPI('auth/signin', userData);
        // return console.log(res);
        const {token} = res.data;
        Cookies.set('access_token', token, {
            sameSite: 'None',
            secure: true,
        });
        return res;
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

export const signup = async (userData) => {
    try {
        const res = await postDataAPI('auth/signup', userData);
        return res;
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

export const forgetPassword = async (userData) => {
    try {
        const res = await postDataAPI('auth/forget-password', userData);
        return res;
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

