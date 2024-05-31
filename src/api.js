import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3004/',
    baseURL: 'http://pet-solutions-backend.vercel.app',
    headers : {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${ sessionStorage.getItem('token') }`
    }
})

export default api