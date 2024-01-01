import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 60000;


axios.interceptors.response.use((response) => {
        return prepareSuccessResponse(response);
    },
    (error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            return prepareFailedResponse(error.response)
        } else if (error.request) {
            // The request was made but no response was received
            return {
                success: false,
                status: 401,
                message: 'Network Error!',
                data: ""
            }
        } else {
            // Something happened in setting up the request that triggered an Error
            return {
                success: false,
                status: 401,
                message: error.message,
                data: ""
            }
        }
    });

// success response manage
function prepareSuccessResponse(data) {
    return {
        success: true,
        message: data?.data?.message,
        data: data?.data?.data,
        status: data?.status
    }
}

// fail response manage
function prepareFailedResponse(data) {
    return {
        success: false,
        message: data?.data?.message || data?.statusText,
        data: data?.data?.data,
        status: data?.status
    }
}


export default axios;
