import { AxiosInstance, AxiosResponse } from 'axios'

// export namespace Exmin {
//     export type AdminResponse = { 
//         success: boolean,
//         result: any,
//     }

//     export type LoginResponse = { 
//         success: boolean,
//         result: {
//             token?: boolean,
//             tfa_secret?: boolean,
//             reset_password?: boolean,
//             ask_tfa?: boolean,
//         }
//     }

//     export class Api {

//         private _token: string | undefined;

//         get token(): string {
//             return this._token!
//         }
//         set token(token: string) {
//             this._token = token;
//         }

//         private _axios: AxiosInstance

//         private constructor(axios: AxiosInstance) {
//             this._axios = axios;
//         }

//         async login(username: string, password: string, totp?: string): Promise<LoginResponse> {
//             const response: AxiosResponse = await this._axios.post('/login', {
//                 username,
//                 password,
//                 totp,
//             });

//             return response.data as LoginResponse
//         }

//     }
// }

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

export default class API {
    private static _axios: AxiosInstance;

    private _token: string | undefined;

    constructor(axios: AxiosInstance) {
        API._axios = axios;
    }

    get token(): string {
        return this._token!
    }
    set token(token: string) {
        this._token = token;
    }

    public static login(): Promise<AxiosResponse> {
        return this._axios.get('/');
    }
}

