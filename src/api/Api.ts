import axios from 'axios';

export const $api = axios.create({
    baseURL: 'https://bba3lu4guhgbm1dkkfc8.containers.yandexcloud.net',
});
