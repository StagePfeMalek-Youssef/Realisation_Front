import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import AdminUserService from '../../../services/AdminService/AdminUserService';

import './User.css';
const AddUser = () => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [username, setUsername] = useState('')
    const [datenaissance, setDatenaissance] = useState('')
    const [codepostal, setCodepostal] = useState('')
    const [telephone, setTelephone] = useState('')
    const [ville, setVille] = useState('')
    const [cin, setCin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateProduit = (e) => {
        e.preventDefault();

        const user = { prenom, nom, username, datenaissance, codepostal, telephone, ville,cin,email,password }

        if (id) {
            AdminUserService.updateUser(id,user).then((response) => {
                history.push('/Listusers')
            }).catch(error => {
                console.log(error)
            })

        } else {
            AdminUserService.createuser(user).then((response) => {

                console.log(response.data)

                history.push('/Listusers');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        AdminUserService.getuserById(id).then((response) => {
            setPrenom(response.data.prenom)
            setNom(response.data.nom)
            setUsername(response.data.username)
            setDatenaissance(response.data.datenaissance)
            setCodepostal(response.data.codepostal)
            setTelephone(response.data.telephone)
            setVille(response.data.Ville)
            setCin(response.data.Cin)
            setEmail(response.data.email)
            setPassword(response.data.password)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update user</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter user</h2>
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
                                    <label> prenom</label>
                                    <input
                                        className='input'
                                        type="text"
                                        name="prenom"
                                        
                                        value={prenom}
                                        onChange={(e) => setPrenom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                  
                                <div className="inputfield">
                                    <label> Nom</label>
                                    <input
                                        className='input'
                                        type="text"
                                        name="nom"
                                        
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Username</label>
                                    <input
                                        className='input'
                                        type="text"
                                        name="username"
                                        
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className="inputfield">
                                    <label> datenaissance</label>
                                    <input
                                        className='input'
                                        type="datetime-local"
                                        name="datenaissance"
                                        
                                        value={datenaissance}
                                        onChange={(e) => setDatenaissance(e.target.value)}
                                    >
                                    </input>
                                </div>



                                <div className="inputfield">
                                    <label> code postal</label>
                                    <input
                                        className='input'
                                        type="number"
                                        name="codepostal"
                                        
                                        value={codepostal}
                                        onChange={(e) => setCodepostal(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> telephone </label>
                                    <input
                                        type="number"
                                        className='input'
                                        name="telephone"
                                        
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Ville </label>
                                    <input
                                        type="text"
                                        className='input'
                                        name="ville"
                                        
                                        value={ville}
                                        onChange={(e) => setVille(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Cin </label>
                                    <input
                                        type="number"
                                        className='input'
                                        name="cin"
                                        
                                        value={cin}
                                        onChange={(e) => setCin(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                                <div className="inputfield">
                                    <label> email </label>
                                    <input
                                        type="Email"
                                        className='input'
                                        name="email"
                                        
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="inputfield">
                                    <label> password </label>
                                    <input
                                        type="password"
                                        className='input'
                                        name="password"
                                        
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                            <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateProduit(e)} >Envoyer </button>
                                <Link to="/Listusers" className="btn btn-secondary" style = {{marginLeft:"10px", color:"grren"}}> Annuler </Link>
                                </div>
                            </div>

                        </div></div>
    )
}

export default AddUser;