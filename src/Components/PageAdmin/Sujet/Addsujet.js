import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SujetService from '../../../services/AdminService/SujetService';




const Addsujet = () => {

    const [titreSujet, setTitreSujet] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateSujet = (e) => {
        e.preventDefault();
        const username=sessionStorage.getItem("UserName");
        const sujet = { titreSujet, message }
        if (id) {
            SujetService.updateSujet(id,sujet).then((response) => {
                history.push('/ListeSujet')
            }).catch(error => {
                console.log(error)
            })

        } else {
                
            SujetService.createSujet(username,sujet).then((response) => {

                console.log(response.data)

                history.push('/ListeSujet');

            }).catch(error => {
                console.log(error)
            })
        }

    }

  

     
    useEffect(() => {

        SujetService.getSujetById(id).then((response) => {
            setTitreSujet(response.data.titreSujet)
            setMessage(response.data.message)
        

        }).catch(error => {
            console.log(error)
        })
    }, [])
    

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Sujet</h2>
        } else {
            return <h2 className="text-center">Ajouter Sujet</h2>
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
                                    <label> Titre de Sujet</label>
                                    <input
                                        type="text"
                                        name="titreSujet"
                                        className="input"
                                        value={titreSujet}
                                        onChange={(e) => setTitreSujet(e.target.value)}
                                    >
                                    </input>
                                </div>

                               
                                <div className="inputfield">
                                        <label> message </label>
                                        <textarea
                                            name="message"
                                            className="input"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        >
                                        </textarea>
                                    </div>

                                <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateSujet(e)} >Envoyer </button>
                                <Link to="/ListeSujet" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                                </div>

                                

                        </div>
                    </div>
                </div>

           

        
    )
}

export default Addsujet;