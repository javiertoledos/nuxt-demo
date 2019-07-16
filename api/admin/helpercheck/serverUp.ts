/// <reference path="../../models.d.ts" />
import { Axios } from '@/api';
import { AxiosResponse } from 'axios';
import StatusCheck = Models.StatusCheck;

// Functional programming?
export async function serverUp() {
    const { data }: AxiosResponse = await Axios.getInstance().get('/');
    const status: StatusCheck = data;
    return data;
}
