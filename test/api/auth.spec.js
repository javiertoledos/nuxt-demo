import axios from 'axios';
import { Axios, Auth } from '@/api';

describe('Auth Methods', function() {
    beforeAll(() => {
        const axiosInstance = axios.create({
            baseURL: 'https://admin-api.vlcntest.com/'
        });
        Axios.setInstance(axiosInstance);
    });

    test('it responds login method with error', async () => {
        const params = {
            username: 'username',
            password: 'password',
            totp: 'totp'
        };
        try {
            const response = await Auth.login(params);
        } catch (err) {
            expect(err.message).toBe('Request failed with status code 400');
        }
    });
});