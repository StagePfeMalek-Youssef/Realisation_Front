import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import AdminUserService from '../../services/AdminService/AdminUserService';
import AppNavbar from '../PageAccueil/AppNavbar';


const ChangeInfo = () => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [datenaissance, setDatenaissance] = useState('')
    const [codepostal, setCodepostal] = useState('')
    const [telephone, setTelephone] = useState('')
    const [ville, setVille] = useState('')
    const [cin, setCin] = useState('')
    const [email, setEmail] = useState('')
    const username=sessionStorage.getItem("UserName")
    const userid=sessionStorage.getItem("UserId")
    const history = useHistory();
    const { id } = useParams();

    const ChangeInfo = (e) => {
        e.preventDefault();

        const user = { prenom, nom,datenaissance, codepostal, telephone, ville,cin,email}

       
            AdminUserService.changeInfo(username,user).then((response) => {
                history.push('/parametre')
            }).catch(error => {
                console.log(error)
            })

            
    }
    useEffect(() => {

        AdminUserService.getuserById(userid).then((response) => {
            setPrenom(response.data.prenom)
            setNom(response.data.nom)
            setDatenaissance(response.data.datenaissance)
            setCodepostal(response.data.codepostal)
            setTelephone(response.data.telephone)
            setVille(response.data.ville)
            setCin(response.data.cin)
            setEmail(response.data.email)

        }).catch(error => {
            console.log(error)
        })
    }, [])
   

   

    return (
        <div>
            <AppNavbar/>
        <br /><br />
        <div className="container">
            <div className="row">
                  <div className="">
                              <h2 className="text-center">Changer Information</h2>
                              <div className="card-body">
                             <form>
                              <div className="form-group mb-2">
                              <label className='form-label'> Prénom :</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name="prenom"
                                        value={prenom}
                                        onChange={(e) => setPrenom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                  
                                <div className="form-group mb-2">
                                    <label className='form-label'> Nom :</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name="nom"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'> Date de naissance :</label>
                                    <input
                                        className='form-control'
                                        type="datetime"
                                        name="datenaissance"
                                        value={datenaissance}
                                        onChange={(e) => setDatenaissance(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'> Code postale :</label>
                                    <input
                                        className='form-control'
                                        type="number"
                                        name="codepostal"
                                        value={codepostal}
                                        onChange={(e) => setCodepostal(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'> Téléphone :</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        name="telephone"
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'> Ville :</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="ville"
                                        value={ville}
                                        onChange={(e) => setVille(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'> Cin :</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        name="cin"
                                        value={cin}
                                        onChange={(e) => setCin(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                                <div className="form-group mb-2">
                                    <label className='form-label'> Email :</label>
                                    <input
                                        type="Email"
                                        className='form-control'
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <button className="btn btn-success" onClick={(e) => ChangeInfo(e)} >Envoyer </button>
                                <Link to="/parametre" className="btn btn-secondary" style = {{marginLeft:"10px", color:"grren"}}> Annuler </Link>
                            </form>
                            </div>
</div></div>
                        </div></div>
    )
}

export default ChangeInfo;