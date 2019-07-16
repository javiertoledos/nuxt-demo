import { AxiosInstance, AxiosResponse } from 'axios'
import * as HelperCheck from './admin/helpercheck';

export type AdminResponse = {
    success: boolean,
    result: any,
}

export type LoginResponse = {
    success: boolean,
    result: {
        token?: boolean,
        tfa_secret?: boolean,
        reset_password?: boolean,
        ask_tfa?: boolean,
    }
}

export class Axios {
    private static instance: Axios;
    private _axios: AxiosInstance;
    
    private constructor(axios: AxiosInstance) {
        this._axios = axios;
    }

    static getInstance(): AxiosInstance {
        return Axios.instance._axios;
    }

    static setInstance(axios: AxiosInstance): Axios {
        Axios.instance = new Axios(axios);      
        return Axios.instance;
    }
}

export {
    HelperCheck
}

