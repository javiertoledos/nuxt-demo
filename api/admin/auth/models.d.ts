/// <reference path="../../models.d.ts" />
declare namespace Models {
    export interface LoginParams {
        username: string,
        password: string,
        totp?: string
    }

    export interface LoginResponse {
        success: boolean,
        result: {
            token?: boolean,
            tfa_secret?: boolean,
            reset_password?: boolean,
            ask_tfa?: boolean,
        }
    }

    export interface AdminResponse = {
        success: boolean,
        result: any,
    }    
}