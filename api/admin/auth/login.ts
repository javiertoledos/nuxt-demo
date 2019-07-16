/// <reference path="../../models.d.ts" />
import { Axios } from '@/api';
import { AxiosResponse } from 'axios';

import LoginParams = Models.LoginParams;
import LoginResponse = Models.LoginResponse;

export async function login(params: LoginParams, options) {
    const { data }: AxiosResponse = await Axios.getInstance().post('/login');
    const loginData: LoginResponse = data;
    return loginData;
}