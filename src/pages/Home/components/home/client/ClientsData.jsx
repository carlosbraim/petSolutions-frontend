import api from '../../../../../../src/api';
import {jwtDecode} from 'jwt-decode';

 const ClientsData = async ()  => {
    let token;
    let decoded;   
    token = sessionStorage.getItem('token');
    //requisicao
    if (token) {
        try {
            decoded = jwtDecode(token)
            const response = await api.get(`clientVet/getClientVet?uid=${decoded.uid}`);
            const data = response.data;
            console.log("data", data)
            return data;
        } catch (error) {
            console.log(error);
            console.log("Nao possui dados")
        }  
    }else{
        console.log("Token com erro no clients Data")
    }   
} 
export default ClientsData;