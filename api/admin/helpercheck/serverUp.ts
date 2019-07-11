import axios from 'axios';

export function request() {
    return axios.get('/');
}