import axios from 'axios'

const RECLAMATION_BASE_REST_API_URL = 'http://localhost:8080/Api/Reclamation';

class ReclamationService{

    getAllReclamation(){
        return axios.get(RECLAMATION_BASE_REST_API_URL)
    }

    getAllReclamationByUsername(username){
        return axios.get(RECLAMATION_BASE_REST_API_URL+"/username/"+username)
    }

    createReclamation(username,reclamation){
        return axios.post(RECLAMATION_BASE_REST_API_URL+"/"+username, reclamation)
    }

    getRecmlamationById(id_R){
        return axios.get(RECLAMATION_BASE_REST_API_URL + "/" +id_R);
    }

    updateRecmlamation(reclamationId, reclamation){
        return axios.put(RECLAMATION_BASE_REST_API_URL + "/" +reclamationId, reclamation);
    }

    deleteReclamation(reclamationId){
        return axios.delete(RECLAMATION_BASE_REST_API_URL + "/" + reclamationId);
    }
}

export default new ReclamationService();