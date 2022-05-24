import axios from 'axios'

const SUGGESTION_BASE_REST_API_URL = 'http://localhost:8080/Api/Suggestion';

class SuggestionService{

    getAllSuggestion(){
        return axios.get(SUGGESTION_BASE_REST_API_URL)
    }
    getAllSuggestionByUsername(username){
        return axios.get(SUGGESTION_BASE_REST_API_URL+"/username/"+username)
    }

    createSuggestion(username,suggestion){
        return axios.post(SUGGESTION_BASE_REST_API_URL+"/"+username,suggestion)
    }

    getSuggestionById(suggestionid){
        return axios.get(SUGGESTION_BASE_REST_API_URL + "/" +suggestionid);
    }

    updateSuggestion(suggestionid, suggestion){
        return axios.put(SUGGESTION_BASE_REST_API_URL + "/" +suggestionid, suggestion);
    }

    active(suggestionid){
        return axios.put(SUGGESTION_BASE_REST_API_URL + "/activeSugetion/" +suggestionid);
    }

    deleteSuggestion(id){
        return axios.delete(SUGGESTION_BASE_REST_API_URL + "/" + id);
    }
}

export default new SuggestionService();