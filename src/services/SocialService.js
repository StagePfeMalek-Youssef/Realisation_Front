import axios from "axios";

class SocialService {
   
     loginWithFacebook = (token) => {
        return axios.post("http://localhost:8080/social/facebook", {token})
        .then(response => { 
            
            return response.data;
         })
      }  
    
      loginWithGoogle = (token) => {
        return axios.post("http://localhost:8080/social/google", {token})
        .then(response => { 
           sessionStorage.setItem("email",response.email);
           sessionStorage.setItem("token",response.tokenId);
            return response.data;
         })
      }  
     
}
export default new SocialService();