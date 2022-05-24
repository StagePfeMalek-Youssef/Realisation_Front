import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinistreService from '../../../services/AdminService/SinistreService';
import AppNavbar from '../../PageAccueil/AppNavbar';

    const AjouterSinistre = () => {

        const [dateSurvenance, setDateSurvenance] = useState('')
        const [etat, setEtat] = useState('')
        const [lieu, setLieu] = useState('')
        const [type, setType] = useState('')
        const [file, setFile] = useState();
        const [numPolicecontrat, setNumPolicecontrat] = useState('')
        const history = useHistory();
        const { id } = useParams();
        const  username=sessionStorage.getItem("UserName");
        const formData = new FormData();
        formData.append("file", file);
        formData.append("etat",etat);
        formData.append("lieu",lieu);
        formData.append("dateSurvenance",dateSurvenance);
        formData.append("type",type);
    
        const saveOrUpdateSinistre = (e) => {
            e.preventDefault();
            const NumPolice=sessionStorage.getItem("NumPolice")
            if (id) {
                SinistreService.updateSinistre(id,formData).then((response) => {
                    history.push('/lessinistres')
                }).catch(error => {
                    console.log(error)
                })
    
            } else {
                    
                SinistreService.createSinistre(numPolicecontrat,username,formData).then((response) => {
    
                    console.log(response.data)
    
                    history.push('/lessinistres');
    
                }).catch(error => {
                    console.log(error)
                })
            }
    
        }
    
      
    
         
        useEffect(() => {
    
            SinistreService.getSinistreById(id).then((response) => {
                setDateSurvenance(response.data.dateSurvenance)
                setEtat(response.data.etat)
                setLieu(response.data.lieu)
                setType(response.data.type)
                setFile(response.data.file)
            
    
            }).catch(error => {
                console.log(error)
            })
        }, [])
        
    
        const title = () => {
    
            if (id) {
                return <h2 className="text-center">Update Sinistre</h2>
            } else {
                return <h2 className="text-center">Déclarer Votre Sinistre</h2>
            }
        }
    
        return (
            <div>
                <AppNavbar/>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="">
                            {
                                title()
                            }
                            <div className="card-body">
                               <form>
                                   
                                    <div className="form-group mb-2">
                                        <label className='form-label'> Date De Survenance :</label>
                                        <input
                                            type="date"
                                            name="date_survenance"
                                            className="form-control"
                                            value={dateSurvenance}
                                            onChange={(e) => setDateSurvenance(e.target.value)}
                                        >
                                        </input>
                                    </div>
                              
                                    <div className="form-group mb-2">
                                            <label className="form-label"> Etat de Sinistre :</label>
                                            <input
                                                type="text"
                                                className='form-control'
                                                 name="etat"
                                                 id='etat'
                                                 value={etat}
                                                onChange={(e) => setEtat(e.target.value)}
                                            >
                                            </input>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label className='form-label'> Lieu de Survenance :</label>
                                            <input
                                                type="text"
    
                                                name="lieu"
                                                className="form-control"
                                                value={lieu}
                                                onChange={(e) => setLieu(e.target.value)}
                                            >
                                            </input>
                                        </div>
    
                                        <div className="form-group mb-2">
                                           <input type="file" name='file'  onChange={(e) => setFile(e.target.files[0])}/>
                                          </div>
                                           
    
                                    <div className="form-group mb-2">
                                        <label className='form-label'> Type De Contrat :</label><br />
                                        <select value={type} onChange={(e) => setType(e.target.value)}>
                                            <option value="Maison" className="form-control col-4">Maison</option>
                                            <option value="Voiture">Voiture</option>
                                            <option value="Ecole">Ecole</option>
                                            <option value="Voyage">Voyage</option>
                                            <option value="Prevoyance">Prevoyance</option>
                                            <option value="Accident">Individuel Accident</option>
                                            <option value="Santé">Santé</option>
                                        </select>
                                        </div>
                                    <div className="form-group mb-2">
                                            <label className='form-label'> le numéro de contrat :</label>
                                            <input
                                                type="number"
                                                name="numPolicecontrat"
                                                className="form-control"
                                                value={numPolicecontrat}
                                                onChange={(e) => setNumPolicecontrat(e.target.value)}
                                            >
                                            </input>
                                        </div>
                                   
                                    <button className="btn btn-success" onClick={(e) => saveOrUpdateSinistre(e)} >Envoyer </button>
                                    <Link to="/user" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
    
export default AjouterSinistre;