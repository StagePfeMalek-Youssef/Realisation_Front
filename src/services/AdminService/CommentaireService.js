import axios from "axios";


const Commentaire_API_BASE_URL ="http://localhost:8080/Api/Commentaire"

class CommentaireService{
    getCommentaires(){
        return axios.get(Commentaire_API_BASE_URL);
    }

    getCommentairesByUsernameAndTitresujet(usrename,titresujet){
      return axios.get(Commentaire_API_BASE_URL+"/username/"+usrename+"/titresujet/"+titresujet);
  }


    getCommentairesByTitresujet(titresujet){
      return axios.get(Commentaire_API_BASE_URL+"/titresujet/"+titresujet);
  }

  active(UserId){
    return axios.put(Commentaire_API_BASE_URL +'/activeCommentaires/'+ UserId);
    }
    
createCommentaire(UserId,formData){
return axios.post(Commentaire_API_BASE_URL+"/"+UserId,formData);
  }
getCommentaireById(id){
return axios.get(Commentaire_API_BASE_URL+"/"+id);
}
updateCommentaire(formData, Id){
return axios.put(Commentaire_API_BASE_URL +'/'+ Id, formData);
}
deleteCommentaire(id){
return axios.delete(Commentaire_API_BASE_URL + '/' + id);
}
}
export default new CommentaireService();