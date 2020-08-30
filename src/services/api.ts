import axios from 'axios';

const api = axios.create({
    baseURL: "https://datasensors.herokuapp.com"
})

export default api;