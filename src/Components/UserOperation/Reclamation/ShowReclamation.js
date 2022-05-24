import React, {useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReclamationService from '../../../services/AdminService/ReclamationService';
import AppNavbar from '../../PageAccueil/AppNavbar';

const ShowReclamation = () => {

    const [reclamations, setReclamation] = useState([])
    const username=sessionStorage.getItem("UserName");
    useEffect(() => {

        getAllReclamations();
    }, [])

    const getAllReclamations = () => {
        ReclamationService.getAllReclamationByUsername(username).then((response) => {
            setReclamation(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteReclamation = (reclamationId) =>{
        ReclamationService.deleteReclamation(reclamationId).then( res => {
            this.setState({reclamations: this.state.reclamations.filter(reclamation => reclamation.reclamationId!== reclamationId)});
        });
    }

    return (
        <>
        <AppNavbar/>
        <div className='main__container'>
            <h2 className = "main__title"> Vos réclamations </h2>
            
          
            {
                        reclamations.map(
                            reclamation=>
                            <section className="sujet">
                            <article>
                            <div key = {reclamation.id_R}> 
                            <p> La réclamation est criée  {reclamation.dateDeclaration} par <div className="btn btn-outline-primary">{reclamation.username}</div> </p><br></br>
                            <p> {reclamation.message} </p> Avec le numéro de réclamation : {reclamation.id_R}

                            <p>             
                            <Link className="btn btn-info" to={`/edit-reclamation-user/${reclamation.id_R}`} >Update</Link>
                      <button className = "btn btn-danger" onClick = {() =>deleteReclamation(reclamation.id_R)}
                      style = {{marginLeft:"10px"}}> Delete</button>
 
                  </p>
                            </div>
                            </article></section>
                        )
                    }
    </div>
    </>
    )
}

export default ShowReclamation;