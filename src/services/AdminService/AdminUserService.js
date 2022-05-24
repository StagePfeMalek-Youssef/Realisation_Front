import axios from "axios";


const USER_API_BASE_URL ="http://localhost:8080/api/auth/admin/user"

class AdminUserService{
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    
createuser(user){
return axios.post(USER_API_BASE_URL,user);
  }
getuserById(id){
return axios.get(USER_API_BASE_URL+"/"+id);
}
updateUser(user, userId){
return axios.put(USER_API_BASE_URL +'/'+ userId, user);
}
deleteUser(id){
return axios.delete(USER_API_BASE_URL + '/' + id);
}
getByCin(cin){
return axios.get('http://localhost:8080/api/auth/admin/ByCin/'+ cin);
}
getexport(){
return axios.get("http://localhost:8080/api/auth/admin/export");
}
changePassword(username, user){
return axios.put("http://localhost:8080/api/auth/changePassword/"+ username, user);
}
changeInfo(username, user){
return axios.put("http://localhost:8080/api/auth/changeInfo/"+ username, user);
}
getusername(username){
return axios.get('http://localhost:8080/api/auth/admin/'+ username);
}

}
export default new AdminUserService();