import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import AdminUserService from '../../services/AdminService/AdminUserService';
import AppNavbar from '../PageAccueil/AppNavbar';


const ChangePassword = () => {


    const username=sessionStorage.getItem("UserName")
  
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const history = useHistory();
    const { id } = useParams();

   const UpdatePassword= (e) =>{
        e.preventDefault();
        const user = { newPassword, oldPassword }
        AdminUserService.changePassword(username,user).then((response) => {
          history.push('/parametre')
        }).catch(error => {
            console.log(error)
        })  
    }

    

    return (
        <div>
            <AppNavbar/>
        <br /><br />
        <div className="container">
            <div className="row">
                  <div className="">
                             <h2 className="text-center">Changer mot de passe</h2>
                             <div className="card-body">
                             <form>
                                <div className="form-group mb-2">
                                    <label className='form-label'> Ancien mot de passe :</label>
                                    <input
                                        type="password"
                                        className='form-control'
                                        name="password"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'> Nouveau mot de passe :</label>
                                    <input
                                        type="password"
                                        className='form-control'
                                        name="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                           
                                <button className="btn btn-success" onClick={(e) => UpdatePassword(e)} >Envoyer </button>
                                <Link to="/parametre" className="btn btn-secondary" style = {{marginLeft:"10px", color:"grren"}}> Annuler </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    )
}

export default ChangePassword;