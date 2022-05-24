import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProduitsService from '../../../services/AdminService/ProduitsService';
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UploadFilesProduit from './UploadFilesProduit';


const useStyles = makeStyles({
    table: {
        minWidth: 95,
    },
    thead: {
        minWidth: 95,
    },
    action: {
        minWidth: 150,
    },
});


const ListProduit = () => {

    const [produits, setProduits] = useState([])

    useEffect(() => {

        getAllProduits();
    }, [])

    const getAllProduits = () => {
        ProduitsService.getAllProduits().then((response) => {
            setProduits(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteProduit = (produitId) => {
        ProduitsService.deleteProduit(produitId).then(res => {
            this.setState({ produits: this.state.produits.filter(produit => produit.produitId !== produitId) });
        });
    }
    const classes = useStyles();
    return (
        <div>
            <produit >
                <div className='' >
                    <h2 className="main__title"> Tous Les Produits </h2>
                    <UploadFilesProduit />
                    <Link to="/add-produit" className="btn btn-primary mb-2" > Ajouter Produit </Link>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.table}>
                                <TableRow className={classes.table}>
                                    <TableCell className={classes.table}><h6>Numéro de produit</h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Nom de produit </h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Catégorie </h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Titre</h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Déscription courte</h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Déscription longue</h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Date de l'ajout</h6></TableCell>
                                    <TableCell className={classes.thead}><h6>Mise à jour</h6></TableCell>
                                    <TableCell className={classes.action}><h6>Actions </h6></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    produits.map(
                                        produit =>
                                            <TableRow key={produit.idPrd}>
                                                <TableCell>{produit.idPrd}</TableCell>
                                                <TableCell>{produit.nomPrd}</TableCell>
                                                <TableCell>{produit.categorie}</TableCell>
                                                <TableCell>{produit.titre}</TableCell>
                                                <TableCell>{produit.descCourte}</TableCell>
                                                <TableCell>{produit.descLong}</TableCell>
                                                <TableCell>{produit.createdAt}</TableCell>
                                                <TableCell>{produit.updatedAt}</TableCell>

                                                <TableCell>
                                                    <Link className="btn btn-info" to={`/edit-produit/${produit.idPrd}`} >Update</Link>
                                                    <button className="btn btn-danger" onClick={() => deleteProduit(produit.idPrd)}
                                                        style={{ marginLeft: "10px" }}> Delete</button>
                                                </TableCell>
                                            </TableRow>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </produit>
        </div>

    )
}

export default ListProduit;