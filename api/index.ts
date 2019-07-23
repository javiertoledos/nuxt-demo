import { AxiosInstance, AxiosResponse } from 'axios'
import * as HelperCheck from './admin/helpercheck';
import * as Auth from './admin/auth';

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
    HelperCheck,
    Auth
}

