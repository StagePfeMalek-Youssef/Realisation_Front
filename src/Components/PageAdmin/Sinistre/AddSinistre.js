import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SinistreService from "../../../services/AdminService/SinistreService"
import './listSinistre.css'


const AddSinistre = () => {

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
                history.push('/sinistres')
            }).catch(error => {
                console.log(error)
            })

        } else {
                
            SinistreService.createSinistre(numPolicecontrat,username,formData).then((response) => {

                console.log(response.data)

                history.push('/sinistres');

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
            return <h2 className="text-center">Ajouter Sinistre</h2>
        }
    }

    return (
        
           
            <div className="wrapper">
                <div className="title">
                  
                        {
                            title()
                        }
                        <div className="form"  >

                                <div className="inputfield">
                                    <label> Date De Survenance</label>
                                    <input
                                        type="date"
                                        name="date_survenance"
                                        className="input"
                                        value={dateSurvenance}
                                        onChange={(e) => setDateSurvenance(e.target.value)}
                                    >
                                    </input>
                                </div>
                          
                                <div className="inputfield">
                                        <label> Etat de Sinistre </label>
                                        <input
                                            type="text"

                                             name="etat"
                                             id='etat'
                                             value={etat}
                                            onChange={(e) => setEtat(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="inputfield">
                                        <label> Lieu de Survenance </label>
                                        <input
                                            type="text"
                                            name="lieu"
                                            className="input"
                                            value={lieu}
                                            onChange={(e) => setLieu(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="inputfield">
                                       <input type="file"
                                              name='file' 
                                              className='input'  
                                              onChange={(e) => setFile(e.target.files[0])}/>
                                      </div>
                                       

                                <div className="inputfield">
                                    <label> Type De Contrat </label>
                                    <div className='custom-selec'>
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
                             

                                    

                                </div>
                                <div className="inputfield">
                                        <label> le numerau de contrat </label>
                                        <input
                                            type="number"

                                            name="numPolicecontrat"
                                    
                                            className="input"
                                            value={numPolicecontrat}
                                            onChange={(e) => setNumPolicecontrat(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateSinistre(e)} >Envoyer </button>
                                <Link to="/sinistres" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                            </div>

                        </div>
                    </div>
                </div>

           

        
    )
}

export default AddSinistre;