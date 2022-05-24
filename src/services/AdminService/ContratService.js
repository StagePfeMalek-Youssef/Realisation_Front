import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const CONTRAT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/contrats';

class ContratService{

    getAllContrats(){
        return axios.get(CONTRAT_BASE_REST_API_URL)
    }

    createContrat(userId,contrat){
        return axios.post(CONTRAT_BASE_REST_API_URL+"/"+userId, contrat)
    }

    getContratById(contratId){
        return axios.get(CONTRAT_BASE_REST_API_URL + '/' + contratId);
    }

    updateContrat(contratId, contrat){
        return axios.put(CONTRAT_BASE_REST_API_URL + '/' +contratId, contrat);
    }

    deleteContrat(contratId){
        return axios.delete(CONTRAT_BASE_REST_API_URL + '/' + contratId);
    }
}

export default new ContratService();