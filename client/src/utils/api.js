import axios from "axios";
import Cookies from "js-cookie";

export const serverUrl = 'https://pet-pal-gules.vercel.app';
// export const apiUrl = `/api`;
export const apiUrl = `${serverUrl}/api`;

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: apiUrl,
});

const refreshAccessToken = async () => {
    try {
        const res = await axiosInstance.post('/auth/refresh');
        const { accessToken } = res.data;
        Cookies.set('access_token', accessToken);
        return accessToken;
    } catch (error) {
        console.log(error);
    }
};

const setUpAxiosInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = Cookies.get('access_token');
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if(error.response && error.response.status === 401 && !originalRequest._retry) {
                try {
                    const newToken = await refreshAccessToken();
                    originalRequest._retry = true;
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return axiosInstance(originalRequest);
                } catch (error) {
                    Cookies.remove('access_token');
                    Cookies.remove('refresh_token');
                    window.location.href = '/signin';
                    return Promise.reject(error);
                }
            }

            return Promise.reject(error);
        }
    );
}

setUpAxiosInterceptors();



export const getDataAPI = async (url, onProgress) => {
    try {
      const res = await axiosInstance.get(url, {
        onDownloadProgress: onProgress,
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error.response.data;
    }
  };
  
  export const postDataAPI = async (url, post, onProgress) => {
    try {
      const res = await axiosInstance.post(url, post, {
        onUploadProgress: onProgress,
      });
      return res.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error.response.data;
    }
  };
  
  export const putDataAPI = async (url, post, onProgress) => {
    try {
      const res = await axiosInstance.put(url, post, {
        onUploadProgress: onProgress,
      });
      return res.data;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error.response.data;
    }
  };
  
  export const patchDataAPI = async (url, post, onProgress) => {
    try {
      const res = await axiosInstance.patch(url, post, {
        onUploadProgress: onProgress,
      });
      return res.data;
    } catch (error) {
      console.error("Error patching data:", error);
      throw error.response.data;
    }
  };
  
  export const deleteDataAPI = async (url, onProgress) => {
    try {
      const res = await axiosInstance.delete(url, {
        onDownloadProgress: onProgress,
      });
      return res.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error.response.data;
    }
  };