import { deleteDataAPI, getDataAPI, postDataAPI } from "../../utils/api"

export const addBlog = async (formData) => {
    try {
        const res = await postDataAPI('blog/add', formData);
        return res;        
    } catch (error) {
        throw error;
    }
}
export const fetchAllBlogs = async () => {
    try {
        const res = await getDataAPI(`blog`);
        return res;        
    } catch (error) {
        throw error;
    }
}

export const fetchBlog = async (id) => {
    try {
        const res = await getDataAPI(`blog/fetch/${id}`);
        return res;        
    } catch (error) {
        throw error;
    }
}
export const deleteBlog = async (id) => {
    try {
        const res = await deleteDataAPI(`blog/delete/${id}`);
        return res;        
    } catch (error) {
        throw error;
    }
}