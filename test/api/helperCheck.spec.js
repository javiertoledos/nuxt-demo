import axios from 'axios';
import { Axios, HelperCheck } from '@/api'

describe('HelperCheck Methods', function () {
  beforeAll(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://admin-api.vlcntest.com/'
    });

    Axios.setInstance(axiosInstance);
  });

  test('returns the healthcheck', async () => {
    const status = await HelperCheck.serverUp();
    expect(status).toHaveProperty('time');
  });
})
