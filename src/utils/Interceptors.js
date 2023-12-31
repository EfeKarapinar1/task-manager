import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:8080"
})

client.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

client.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

