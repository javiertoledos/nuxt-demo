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
            code: number,
            message: string
        }
    }
}