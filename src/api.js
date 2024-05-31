import axios from 'axios';

const api = axios.create({
    baseURL: 'pet-solutions-backend-rgtl8eose-carlos-juniors-projects.vercel.app',
    headers : {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${ sessionStorage.getItem('token') }`
    }
})

export default api