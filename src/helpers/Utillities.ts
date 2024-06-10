import { IUtillities } from "./IUtillities";
import axios from "axios";
import { config } from "../axiosConfig/axiosConfig";
import { isEmpty } from "lodash";
// import { isEmpty } from "@microsoft/sp-lodash-subset";
const api = axios.create(config);

api.interceptors.request.use(
    async config => {
        // const TOKEN = localStorage.getItem('USER_TOKEN')
        // config.headers = (TOKEN) ? { 'Authorization': `Bearer ${TOKEN}` } : { Message: 'No Authorized' };
        return config;
    },
    error => {
        Promise.reject(error)
    });

async function getData(props: IUtillities) {
    try {
        const datos = await api.get(props.url).then(datos => {
            return datos.data;
        }).catch(error => {
            return { message: 'No se pudieron obtener los datos', error: error }
        });
        if (!isEmpty(datos.data)) {
            return datos.data;
        } else return [{ message: 'No se pudieron obtener los datos' }]
    } catch (err) {
        console.error(err);
    }
};

async function saveData(props: IUtillities) {
    try {
        const { data } = props;
        return await api.post(props.url, data)
            .then(response => {
                return response.status;
            })
            .catch(error => { return { message: error } });
    } catch (error) {
        console.error(error)
    }
}

async function updateData(props: IUtillities) {
    try {
        config['content-type'] = 'application/x-www-form-urlencoded'
        const { data } = props;
        return await api.put(props.url, data)
            .then(response => {
                return response.status;
            })
            .catch(error => {
                return { message: error }
            });
    } catch (error) {
        console.error(error)
    }
}

async function deleteData(props: IUtillities) {
    try {
        return await api.delete(props.url)
            .then(response => {
                return response.status;
            })
            .catch(error => { return { message: error } });
    } catch (error) {
        console.error(error)
    }
}

async function LogIn(props: IUtillities) {
    config['content-type'] = 'application/x-www-form-urlencoded'
    delete api.defaults.headers.common['Authorization'];
    try {
        const { data, url } = props;
        return await api.post(url, data)
            .then(response => {
                if (response['status'] !== undefined) {
                    localStorage.setItem('USER_TOKEN', response.data.token);
                    return { status: response.status, Token: `${response.data.token}`, nombreUsuario: response.data.nombreUsuario };
                } else {
                    return { status: 401 };
                }
            })
            .catch(error => { return { message: error } });
    } catch (error) {
        console.error(error)
    }
}

async function LogOut() {
    localStorage.clear();
}

async function checkUser(props: IUtillities) {
    config['content-type'] = 'application/x-www-form-urlencoded'
    try {
        return await api.get(props.url)
            .then(response => {
                if (response.status === 200) {
                    return { user: response.data, status: response.status }
                } else {
                    return { message: 'Error de autenticación' }
                }
            }).catch(error => { return { status: 401, error: error } })
    } catch (error) {
        console.error('catch', error)
    }
}

function getToken() {
    const tokenStored = localStorage.getItem('USER_TOKEN');
    if (!isEmpty(tokenStored)) {
        return true
    } else {
        return false
    }
}

// function getStates() {
//     const states = localStorage.getItem('States');
//     if (!isEmpty(states)) {
//         states.replaceAll('&', ',');
//         states.replaceAll('=', ':')
//         return JSON.parse(states)
//     } else
//         return undefined
// }

function setStatesLocal(states) {
    const statesString = JSON.stringify(states);
    localStorage.setItem('States', statesString);
}

export {
    getData,
    saveData,
    deleteData,
    updateData,
    LogIn,
    checkUser,
    getToken,
    // getStates,
    setStatesLocal,
    LogOut
};
