import axios from 'axios';

const ip = 'http://192.168.0.9:7272';

const api = axios.create({
    baseURL: ip
});

export default api;