import axios from 'axios';
// viacep.com.br/ws/01001000/json/
//01001000
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;