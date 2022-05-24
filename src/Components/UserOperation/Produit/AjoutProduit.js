import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import ProduitsService from '../../../services/AdminService/ProduitsService';
import AppNavbar from '../../PageAccueil/AppNavbar';


const AjoutProduit = () => {

    const [nomPrd, setNomPrd] = useState('')
    const [categorie, setCategorie] = useState('')
    const [titre, setTitre] = useState('')
    const [descCourte, setDescCourte] = useState('')
    const [descLong, setDescLong] = useState('')
    const history = useHistory();
    const { id } = useParams();
   
    const saveOrUpdateProduit = (e) => {
        e.preventDefault();
        const  username=sessionStorage.getItem("UserName");
        const produit = {nomPrd, categorie, titre, descCourte, descLong, username }
        const UserId=sessionStorage.getItem("UserId")
        if (id) {
            ProduitsService.updateProduit(id, produit).then((response) => {
                history.push('/lesproduits')
            }).catch(error => {
                console.log(error)
            })

        } else {
            ProduitsService.createProduit(UserId,produit).then((response) => {

                console.log(response.data)

                history.push('/lesproduits');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        ProduitsService.getProduitById(id).then((response) => {
            setNomPrd(response.data.nomPrd)
            setCategorie(response.data.categorie)
            setTitre(response.data.titre)
            setDescCourte(response.data.descCourte)
            setDescLong(response.data.descLong)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Produit</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter Produit</h2>
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
                                    <label className='form-label'> Nom de produit :</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name="nom_prd"
                                        value={nomPrd}
                                        onChange={(e) => setNomPrd(e.target.value)}
                                    >
                                    </input>
                                </div>

                               
                                <div className="form-group mb-2">
                                    <label className='form-label'> Catégorie :</label>
                                   
                                    <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className="form-control">
                                        <option value="Maison">Maison</option>
                                        <option value="Voiture">Voiture</option>
                                        <option value="Ecole">Ecole</option>
                                        <option value="Voyage">Voyage</option>
                                        <option value="Prevoyance">Prevoyance</option>
                                        <option value="Accident">Individuel Accident</option>
                                        <option value="Santé">Santé</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label className='form-label'> Titre :</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="titre"
                                        value={titre}
                                        onChange={(e) => setTitre(e.target.value)}
                                    >
                                    </input>
                                </div>
                                    <div className="form-group mb-2">
                                        <label className='form-label'> Déscription Courte :</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name="desc_courte"
                                            value={descCourte}
                                            onChange={(e) => setDescCourte(e.target.value)}
                                        >
                                        </input>
                                    </div>

                            
                                <div className="form-group mb-2">
                                    <label className='form-label'> Déscription Longue :</label>
                                    <textarea
                                        className='form-control'
                                        name="desc_long"
                                        value={descLong}
                                        onChange={(e) => setDescLong(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                           
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateProduit(e)} >Envoyer </button>
                                <Link to="/lesproduits" className="btn btn-secondary" style = {{marginLeft:"10px", color:"grren"}}> Annuler </Link>
                             </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>               
    )
}

export default AjoutProduit;