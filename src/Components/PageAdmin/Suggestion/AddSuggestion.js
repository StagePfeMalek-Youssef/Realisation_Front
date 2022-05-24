import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SuggestionService from '../../../services/AdminService/SuggestionService';


import './ListSuggestion.css';
const AddSuggestion = () => {

    const [message, setMessage] = useState('')
    const [objet, setObjet] = useState('')
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateSuggestion = (e) => {
        e.preventDefault();

        const suggestion = { message, objet }
        const username = sessionStorage.getItem("UserName");
        if (id) {
            SuggestionService.updateSuggestion(id, suggestion).then((response) => {
                console.log(response.data)
                history.push('/suggestions')
            }).catch(error => {
                console.log(error)
            })

        } else {
            SuggestionService.createSuggestion(username, suggestion).then((response) => {
                sessionStorage.setItem("active", response.data.active)
                console.log(response.data.type)
                console.log(response.data.activa)
                console.log(response.data)

                history.push('/suggestions');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        SuggestionService.getSuggestionById(id).then((response) => {
            setMessage(response.data.message)
            setObjet(response.data.objet)


        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Suggestion</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter Suggestion</h2>
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
                        <label> Objet </label>
                        <div >
                            <select value={objet} onChange={(e) => setObjet(e.target.value)}>

                                
                                <option value="Panne Technique">Panne Technique</option>
                                <option value="Service">Service</option>
                                <option value="Agence">Agence</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputfield">
                        <label> Ecrire Message </label>
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
                    <button className="btn btn-success" onClick={(e) => saveOrUpdateSuggestion(e)} >Envoyer </button>
                    <Link to="/suggestions" className="btn btn-secondary" style={{ marginLeft: "10px" }}> Annuler </Link>
                </div>

            </div>
        </div>

    )
}

export default AddSuggestion