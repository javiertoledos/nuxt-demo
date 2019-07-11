import axios, { AxiosResponse } from 'axios'

interface loginParams {
    username: string,
    password: string,
    totp?: string
}

export function request(params: loginParams, options) {
    return axios.post('/login');
}