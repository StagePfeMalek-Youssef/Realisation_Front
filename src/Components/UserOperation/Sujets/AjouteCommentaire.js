import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import CommentaireService from '../../../services/AdminService/CommentaireService';
import AppNavbar from '../../PageAccueil/AppNavbar';
import "./comment.css"



const AjouteCommentaire = () => {

    const [message, setMessage] = useState('')
    const history = useHistory();
    const { id } = useParams();
    const UserId=sessionStorage.getItem("UserId")
    const  titreSujet=sessionStorage.getItem("titresujet")
    const username=sessionStorage.getItem("UserName");
    const formData = new FormData();
    formData.append("message", message);
    formData.append("titreSujet", titreSujet);
    formData.append("username", username);
    const saveOrUpdateSujet = (e) => {
        e.preventDefault();
      
                
            CommentaireService.createCommentaire(UserId,formData).then((response) => {
                
                console.log(response.data)
                sessionStorage.setItem("titre",response.data.titresujet)
                history.push('/ViewSujet/'+id);

            }).catch(error => {
                console.log(error)
            })
        }

    
   

     
    useEffect(() => {

        CommentaireService.getCommentaireById(id).then((response) => {
            setMessage(response.data.message)
        

        }).catch(error => {
            console.log(error)
        })
    }, [])
    

   

    return (
        
           
            <div >
                
                  
                
                <div className="title">
                 
                                <div>
                                        <label> message </label>
                                        <textarea
                                           type="text"

                                            name="message"

                                            className="comment-form-textarea"
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
      />
                                    </div>
                                <div className='inputfield'>
                                <button  className="comment-form-button"  onClick={(e) => saveOrUpdateSujet(e)} >Envoyer </button>
                                <Link to="/SujetShow"     className="comment-form-button comment-form-cancel-button" style = {{marginLeft:"10px"}}> Annuler </Link>
                            </div>

                        </div>
                
                </div>

           

        
    )
}

export default AjouteCommentaire;