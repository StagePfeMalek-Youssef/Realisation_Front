import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const SINISTRE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/sinistres';

class SinistreService{

    getAllSinistres(){
        return axios.get(SINISTRE_BASE_REST_API_URL)
    }

    getAllSinistresByUsername(username){
        return axios.get(SINISTRE_BASE_REST_API_URL+"/username/"+username)
    }

    createSinistre(numPolicecontrat,username,formData){
        return axios.post(SINISTRE_BASE_REST_API_URL+'/Upload/'+numPolicecontrat+"/"+username,formData)
    }


    getSinistreById(sinistreId){
        return axios.get(SINISTRE_BASE_REST_API_URL + '/' + sinistreId);
    }

    updateSinistre(sinistreId, sinistre){
        return axios.put(SINISTRE_BASE_REST_API_URL + '/' + sinistreId, sinistre);
    }

    deleteSinistre(sinistreId){
        return axios.delete(SINISTRE_BASE_REST_API_URL + '/' + sinistreId);
    }
}

export default new SinistreService();