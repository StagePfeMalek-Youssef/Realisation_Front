import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './listContrat.css';
import './UploadFilesContrat';
import ContratService from '../../../services/AdminService/ContratService';
import UploadFilesContrat from './UploadFilesContrat';
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 95,
    },
    thead: {
        minWidth: 100,
    },
    action: {
        minWidth: 100,
    },
});

const ListContrat = () => {

    const [contrats, setContrats] = useState([])

    useEffect(() => {

        getAllContrats();
    }, [])

    const getAllContrats = () => {
        ContratService.getAllContrats().then((response) => {
            setContrats(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteContrat = (contratId) => {
        ContratService.deleteContrat(contratId).then(res => {
            this.setState({ contrats: this.state.contrats.filter(contrat => contrat.contratId !== contratId) });
        });
    }


    const classes = useStyles();
    return (
        <div className='main__container'>
            <h2 className="main__title"> Tous Les Contrats </h2>
            <UploadFilesContrat />
            <Link to="/add-contrat" className="btn btn-primary mb-2" > Ajouter Contrat </Link>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.table}>
                        <TableRow className={classes.table}>
                            <TableCell className={classes.table}><h6> Id contrat </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Numéro de police</h6></TableCell>
                            <TableCell className={classes.thead}><h6> Date de l'effet </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Date fin de l'effet </h6></TableCell>
                            <TableCell className={classes.thead}><h6>Type de contrat </h6></TableCell>
                            <TableCell className={classes.thead}><h6>Etat </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Date l'ajout </h6></TableCell>
                            <TableCell className={classes.action}><h6> Actions </h6></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            contrats.map(
                                contrat =>
                                    <TableRow key={contrat.idC}>
                                        <TableCell> {contrat.idC} </TableCell>
                                        <TableCell> {contrat.numPolice} </TableCell>
                                        <TableCell>{contrat.dateEffet}</TableCell>
                                        <TableCell>{contrat.dateFinEffet}</TableCell>
                                        <TableCell>{contrat.type}</TableCell>
                                        <TableCell>{contrat.etat}</TableCell>
                                        <TableCell>{contrat.creation}</TableCell>

                                        <TableCell>
                                            <Link className="btn btn-info" to={`/edit-contrat/${contrat.idC}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteContrat(contrat.idC)}
                                                style={{ marginLeft: "10px" }}> Delete</button>
                                        </TableCell>
                                    </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ListContrat;