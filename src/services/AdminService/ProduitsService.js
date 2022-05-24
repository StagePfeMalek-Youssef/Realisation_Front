import axios from 'axios'

const PRODUIT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/produits';

class ProduitsService{

    getAllProduits(){
        return axios.get(PRODUIT_BASE_REST_API_URL)
    }

    getAllProduitsByUsername(username){
        return axios.get(PRODUIT_BASE_REST_API_URL+"/username/"+username)
    }

    createProduit(userId,produit){
        return axios.post(PRODUIT_BASE_REST_API_URL+"/"+userId, produit)
    }

    getProduitById(produitId){
        return axios.get(PRODUIT_BASE_REST_API_URL + '/' + produitId);
    }

    updateProduit(produitId, produit){
        return axios.put(PRODUIT_BASE_REST_API_URL + '/' +produitId, produit);
    }

    deleteProduit(produitId){
        return axios.delete(PRODUIT_BASE_REST_API_URL + '/' + produitId);
    }
}

export default new ProduitsService();