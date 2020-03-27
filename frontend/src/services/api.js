import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:7272"
});

export default api;