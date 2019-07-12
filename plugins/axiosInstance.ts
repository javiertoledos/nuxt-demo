import API from '@/api';

export default function(context) {
    if (!context.$axios) {
        console.error('Configure Nuxt Axios plugin');
    } else {
        new API(context.$axios);
    }
}