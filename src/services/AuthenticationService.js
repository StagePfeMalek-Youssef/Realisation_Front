import axios from "axios";

class AuthenticationService {
  
  signin = (email, password) => {
      return axios.post("http://localhost:8080/api/auth/signin", {email, password})
        .then(response => {
               if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
               }
                 return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
        
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async(prenom, nom, username,datenaissance,codepostal,telephone,ville,cin, email, password) => {
    return axios.post("http://localhost:8080/api/auth/signup", {prenom,nom,username,datenaissance,codepostal,telephone,ville,cin,email, password})
    .then(
      (response)=>{
       return response.data;
      }
 
    )
    
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  useractive = (email, password) => {
    return axios.post("http://localhost:8080/api/auth/active", {email, password})
    .then(response => { 
        return response.data;
     })
  }  



  activeAccount = (mail, code) => {
    return axios.post("http://localhost:8080/api/auth/activated", {mail,code})
    .then(response => { 
        return response.data;
    })
  }


  checkeEmail = (email) => {
    return axios.post("http://localhost:8080/checkeEmail", {email})
    .then(response => { 
        return response.data;
    })
  }

  rezetpassword = (email,code,password,confirmepassword) => {
    return axios.post("http://localhost:8080/rezetPassword", {email,code,password,confirmepassword})
    .then(response => { 
        return response.data;
    })
  }

  compare = (email,code,password,confirmepassword) => {
    return axios.post("http://localhost:8080/compare", {email,code,password,confirmepassword})
    .then(response => { 
        return response.data;
    })
  }


   findRole = (email,password) => {
    return axios.post("http://localhost:8080/api/auth/verifRole", {email,password})
    .then(response => { 
        return response.data;
    })
  }
 

  
}

export default new AuthenticationService();