import { AxiosRequestConfig } from "axios";

const baseUrl = {
    dev: 'http://51.161.13.38:3000/api',
    prod: 'https://apitecnofest.onrender.com'
}

const config: AxiosRequestConfig = {
    baseURL: baseUrl.prod,
    headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET,PUT,POST,DELETE,OPTIONS'
    }
}

export { config };