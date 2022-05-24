import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const SUJET_BASE_REST_API_URL = 'http://localhost:8080/Api/Sujet';

class SujetService{

    getAllSujets(){
        return axios.get(SUJET_BASE_REST_API_URL)
    }

    getAllSujetsByUsername(username){
        return axios.get(SUJET_BASE_REST_API_URL+"/username/"+username)
    }

    createSujet(username,sujet){
        return axios.post(SUJET_BASE_REST_API_URL + "/" + username, sujet)
    }

     getSujetById(sujetId){
        return axios.get(SUJET_BASE_REST_API_URL + '/' + sujetId);
    }

    active(sujetId){
        return axios.put(SUJET_BASE_REST_API_URL + '/activeSujet/' + sujetId);
    }
    

    updateSujet(sujetId, sujet){
        return axios.put(SUJET_BASE_REST_API_URL + '/' +sujetId, sujet);
    }

    deleteSujet(sujetId){
        return axios.delete(SUJET_BASE_REST_API_URL + '/' + sujetId);
    }
}

export default new SujetService();