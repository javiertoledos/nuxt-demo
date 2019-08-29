import { Axios } from '@/api';

export default function (context: any) {
    context.$axios.defaults.headers.common['x-mock-match-request-headers']

    if (!context.$axios) {
        console.error('Configure Nuxt Axios plugin');
    } else {
        Axios.setInstance(context.$axios);
    }
}