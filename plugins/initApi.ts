import { Axios } from '@/api';

export default function (context: any) {
    if (!context.$axios) {
        console.error('Configure Nuxt Axios plugin');
    } else {
        Axios.setInstance(context.$axios);
    }
}