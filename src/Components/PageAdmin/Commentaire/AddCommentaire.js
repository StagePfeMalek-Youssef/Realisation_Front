import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import CommentaireService from '../../../services/AdminService/CommentaireService';
import ReclamationService from '../../../services/AdminService/ReclamationService';


import './ListCommentaire.css';
const AddCommentaire = () => {

    const [message, setMessage] = useState('')
    const history = useHistory();
    const { id } = useParams();
    const  titreSujet=sessionStorage.getItem("titreSujet")
    const formData = new FormData();
    formData.append("message", message);
    formData.append("titreSujet", titreSujet);


    const saveOrUpdateCommentaire = (e) => {
        e.preventDefault();  
        
        
        const username=sessionStorage.getItem("UserName");
        if (id) {
            CommentaireService.updateCommentaire(id,formData).then((response) => {
                console.log(response.data)
                history.push('/Commentaires')
            }).catch(error => {
                console.log(error)
            })

        } else {
            CommentaireService.createCommentaire(formData).then((response) => {
                
                console.log(response.data)
                sessionStorage.setItem("titre",response.data.titresujet)
                history.push('/Commentaires');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        CommentaireService.getCommentaireById(id).then((response) => {
            setMessage(response.data.message)
        

        }).catch(error => {
            console.log(error)
        })
    }, [])
    
    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Commentaire</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter Commentaire</h2>
        }
    }

    return (
        
            <div className="wrapper">
                <div className="title">
                   
                        {
                            title()
                        }
                        <div className="form">
            
                                <div className="inputfield">
                                    <label> Ecrire Message :</label>
                                    <textarea
                                        name="message"
                                        className="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    >
                                    </textarea>
                                </div>

                                
                               
                                    
                                

                                </div>
                                
                              <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateCommentaire(e)} >Envoyer </button>
                                <Link to="/Commentaires" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                                </div>

                        </div>
               </div>

    )
}

export default AddCommentaire