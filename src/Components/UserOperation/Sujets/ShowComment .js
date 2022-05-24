import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import CommentaireService from '../../../services/AdminService/CommentaireService';
import AppNavbar from '../../PageAccueil/AppNavbar';

import "./Sujet.css"

const ShowComment  = () => {



    const [Commentaires, setCommentaire] = useState([])
    const titresujet=sessionStorage.getItem("titresujet")
    const username=sessionStorage.getItem("UserName");
        useEffect(() => {

        getAllCommentaire();
    }, [])

    const getAllCommentaire = () => {
        CommentaireService.getCommentairesByUsernameAndTitresujet(username,titresujet).then((response) => {
    
                setCommentaire(response.data)
                console.log(response.data);
            
            
        }).catch(error =>{
            console.log(error);
        })
    }
   
   const deleteComment = (commentId) =>{
        CommentaireService.deleteCommentaire(commentId).then( res => {
            this.setState({Commentaires: this.state.Commentaire.filter(Commentaire => Commentaire.commentId!== commentId)});
        });
    }
 
   
       
      


       
        

  
  

    return (
        
     
   <div>
       
       
       {
         
         Commentaires.map(
            Commentaire  =>
                <section className="sujet">
             <article>
             
            
                <div key = {Commentaire.id}> 
                <div>
                  <p> Le commentaire est créé à {Commentaire.createdAt} par <div className="btn btn-outline-primary">{Commentaire.username}</div> </p><br></br>
                  <p> {Commentaire.message} </p>
        
     
                  <p>             
                
                      <button className = "btn btn-danger" onClick = {() =>deleteComment(Commentaire.id)}
                      style = {{marginLeft:"10px"}}> Delete</button>
 
                  </p>
               </div>
               </div>
          
             
             
         
             </article>
             </section>
            
             
         )
     }
             
   </div>

           

        
    )
}

export default ShowComment ;