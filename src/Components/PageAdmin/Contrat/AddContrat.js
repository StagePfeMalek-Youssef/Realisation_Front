import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import ContratService from '../../../services/AdminService/ContratService';


import './listContrat.css';
const AddContrat = () => {

    const [numPolice, setNumPolice] = useState('')
    const [dateEffet, setDateEffet] = useState('')
    const [dateFinEffet, setDateFinEffet] = useState('')
    const [type, setType] = useState('')
    const [etat, setEtat] = useState('')
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateContrat = (e) => {
        e.preventDefault();
        
        const UserId=sessionStorage.getItem("UserId")
        const contrat = { numPolice, dateEffet, dateFinEffet, type, etat }

        if (id) {
            ContratService.updateContrat(id, contrat).then((response) => {
                sessionStorage.setItem("TypeContrat",response.data.type);
                history.push('/contrats')
            }).catch(error => {
                console.log(error)
            })

        } else {
            ContratService.createContrat(UserId,contrat).then((response) => {
              
               
                console.log(response.data.type)
                console.log(response.data)

                history.push('/contrats');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        ContratService.getContratById(id).then((response) => {
            setNumPolice(response.data.numPolice)
            setDateEffet(response.data.dateEffet)
            setDateFinEffet(response.data.dateFinEffet)
            setType(response.data.type)
            setEtat(response.data.etat)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Contrat</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter Contrat</h2>
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
                            
                                
                                    <label> Numéro De Police</label>
                                    <input
                                        type="number"
                                        name="num_police"
                                        className="input"
                                        value={numPolice}
                                        onChange={(e) => setNumPolice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Date De L'effet </label>
                                    <input
                                        type="date"
                                        name="date_effet"
                                        className="input"
                                        value={dateEffet}
                                        onChange={(e) => setDateEffet(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Date Fin De L'effet </label>
                                    <input
                                        type="date"

                                        name="date_fin_effet"
                                        className="input"
                                        value={dateFinEffet}
                                        onChange={(e) => setDateFinEffet(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="inputfield">
                                    <label> Type De Contrat </label>
                                    <div className='custom-selec'>
                                    <select value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="Maison" className=''>Maison</option>
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
                                        <label> Etat d'un Contrat </label>
                                        <input
                                            type="text"

                                            name="etat"
                                            className="input"
                                            value={etat}
                                            onChange={(e) => setEtat(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                

                                </div>
                                
                              <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateContrat(e)} >Envoyer </button>
                                <Link to="/contrats" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                                </div>

                        </div>
               </div>

    )
}

export default AddContrat