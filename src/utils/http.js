import axios from "axios";


let apiUrl = process.env.API_URL;
if (process.env.APP_ENV === "dev") {
    apiUrl = process.env.APP_DEVELOPMENT_API;
}
axios.defaults.baseURL = apiUrl;

const request = async options => {
    return axios.request(options);
};

export const get = (url, params = {}, headers = {}) => {
    return request({
        method: "get",
        url,
        params,
        headers,
    });
};

export const deleteRequest = (url, params = {}, headers = {}) => {
    return request({
        method: "delete",
        url,
        params,
        headers,
    });
};

export const post = (url, data, headers, config = {}) => {
    return request({
        method: "post",
        url,
        data,
        headers,
        ...config
    });
};

export const put = (url, data = {}, headers = {}, config = {}) => {
    return request({
        method: "put",
        url,
        data,
        headers,
        ...config
    });
};
