import axios from 'axios';
import { Axios, HelperCheck } from '@/api'

describe('HelperCheck Methods', function () {
  beforeAll(() => {
    const axiosInstance = axios.create({
      baseURL: 'http://managers-api.portafoliex.com/'
    });

    Axios.setInstance(axiosInstance);
  });

  test('returns the healthcheck', async () => {
    const { data } = await HelperCheck.serverUp();
    expect(data).toHaveProperty('time');
  });
})
