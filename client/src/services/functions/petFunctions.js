import { postDataAPI } from "../../utils/api";

export const adoptPet = async (formData, petId = null) => {
    try {
        const data = {
            petId,
            ...formData
        };
        const res = await postDataAPI('pet/adopt', data);
        return res;
    } catch (error) {
        throw error;
    }
}