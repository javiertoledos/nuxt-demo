import { Axios } from '@/api';

// Functional programming?
export async function serverUp() {
    return await Axios.getInstance().get('/');
}
