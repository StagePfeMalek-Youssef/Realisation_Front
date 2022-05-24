import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SuggestionService from '../../../services/AdminService/SuggestionService';
import 'bootstrap/dist/css/bootstrap.min.css';

import './ListSuggestion.css';
import AppNavbar from '../../PageAccueil/AppNavbar';
const AddSuggestionUser = () => {

    const [message, setMessage] = useState('')
    const [objet, setObjet] = useState('')
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateSuggestion = (e) => {
        e.preventDefault();  
        
        const suggestion = { message, objet }
        const username=sessionStorage.getItem("UserName");
      
            SuggestionService.createSuggestion(username,suggestion).then((response) => {
            
                console.log(response.data.type)
                console.log(response.data)

                history.push('/show-suggestion-user');

            }).catch(error => {
                console.log(error)
            })
        }

    
    useEffect(() => {

        SuggestionService.getSuggestionById(id).then((response) => {
            setMessage(response.data.message)
            setObjet(response.data.objet)
          

        }).catch(error => {
            console.log(error)
        })
    }, [])



    return (
        <div>
            <AppNavbar/>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="">
                          <h2 className="text-center">Déclarer votre suggestion</h2>
                
                        <div className="card-body">
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Objet :</label><br/>
                                    <select value={objet} onChange={(e) => setObjet(e.target.value)}>
                                        <option value="---Séléctionner---" disabled>---Sélectionner---</option>
                                        <option value="Panne Technique">Panne Technique</option>
                                        <option value="Agence">Agence</option>
                                        <option value="Service">Service</option>                            
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label className='form-label'> Ecrire Message :</label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                                
                             
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateSuggestion(e)} >Envoyer </button>
                                <Link to="/user" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                               </form>
                               </div>
                               </div>
</div>
                        </div>
               </div>

    )
}

export default AddSuggestionUser