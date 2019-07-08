declare namespace Models {
    export interface Auth {
        token: string | null,
    }
    export interface Admin {
        id: number,
        username: string,
        firstName: string,
        lastName: string,
        password?: string,
        active: boolean,
    }
    
    export interface Role {
        id: number,
        name: string,
        description: string,
        permissions: Array<string>,
    }
    
    export enum AccountState {
        CREATED = "CREATED",
        UNVERIFIED = "UNVERIFIED",
        VERIFIED = "VERIFIED",
        BLOCKED = "BLOCKED",
    }

    export interface Account {
        id: number,
        remote_id: string,
        username: string,
        lang: string,
        tag: string,
        created_date: Date,
        state: AccountState,
    }
}