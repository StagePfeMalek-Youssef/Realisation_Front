import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SujetService from '../../../services/AdminService/SujetService';
import AppNavbar from '../../PageAccueil/AppNavbar';
import "./Sujet.css"

const SujetShow = () => {



    const [sujets, setSujets] = useState([])
    const username=sessionStorage.getItem("UserName");
    useEffect(() => {

        getAllSujet();
    }, [])

    const getAllSujet = () => {
        SujetService.getAllSujetsByUsername(username).then((response) => {
            setSujets(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
   
    const deleteSujet = (sujetId) =>{
        SujetService.deleteSujet({sujets: this.state.sujet.filter(sujet => sujet.sujetId!== sujetId)});
        
    }
  

    return (
        
        
   <div>
      <AppNavbar/> 
        <div className='main__container'>
            <h2 className = "main__title"> Page de discussion </h2>
            La MAE Assurance offre un espace de discussion ici
            <br/> 
            <Link to = "/AjouteSujet" className = "btn btn-info mb-2" > Ajouter un sujet </Link>
        </div>

       
       
       
  
       
        {
         
         sujets.map(
             sujet =>
             <section className="sujet">
             <article>
             
             <div key = {sujet.idSu}> 
                 <p> Le sujet {sujet.titreSujet} est créé par <div className="btn btn-outline-primary">{sujet.username} </div> à {sujet.createdAt} </p><br></br>
                 <p> {sujet.message} </p>
       

                 <p>             
                  <Link className="btn btn-info" to={`/ViewSujet/${sujet.idSu}`} >Lire la publication</Link>

                 </p>
             </div>
             </article>
           </section>
         )
     }
             
      


       
        

   </div>

           

        
    )
}

export default SujetShow;