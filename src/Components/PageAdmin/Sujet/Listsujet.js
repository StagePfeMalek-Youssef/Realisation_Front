import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SujetService from '../../../services/AdminService/SujetService';

const useStyles = makeStyles({
    table: {
      minWidth: 95,
    },
    thead:{
        minWidth:135,
    },
    action:{
        minWidth:290,
    },
  });


const Listsujet = () => {

    const [sujets, setSujets] = useState([])

    useEffect(() => {

        getAllSujet();
    }, [])

    const getAllSujet = () => {
        SujetService.getAllSujets().then((response) => {
            setSujets(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteSujet = (sujetId) =>{
        SujetService.deleteSujet(sujetId).then( res => {
            this.setState({sujets: this.state.sujets.filter(sujet => sujet.sujetId!== sujetId)});
        });
    }
    
    const activeSujet = (sujetId) =>{
        SujetService.active(sujetId).then( res => {
        })
    }
    const classes = useStyles();
    return (
        <div className='main__container'>
            <h2 className = "main__title"> Tous Les Sujets </h2>
            <Link to = "/add-sujet" className = "btn btn-primary mb-2" > Ajouter un sujet </Link>
            <TableContainer component={Paper}>
               <Table className={classes.table} aria-label="simple table"> 
                <TableHead className={classes.table}>
                    <TableRow className={classes.table}>
                    <TableCell className={classes.table}><h6> Id sujet </h6></TableCell>
                    <TableCell className={classes.thead}><h6>Titre de sujet</h6></TableCell>
                    <TableCell className={classes.thead}><h6> Message </h6> </TableCell>
                    <TableCell className={classes.action}><h6> Actions </h6></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sujets.map(
                            sujet =>
                            <TableRow key = {sujet.idSu}> 
                                <TableCell> {sujet.idSu} </TableCell>
                                <TableCell> {sujet.titreSujet} </TableCell>
                                <TableCell> {sujet.message} </TableCell>
                      

                                <TableCell>
                                    <Link className="btn btn-info" to={`/edit-sujet/${sujet.idSu}`} >Update</Link>
                                
                                
                                  <button className={sujet.active===false ? "btn btn-warning" : "btn btn-success"} onClick = {() => activeSujet(sujet.idSu)}
                                  style = {{marginLeft:"10px"}}> Accept</button>
                                
                                    <button className = "btn btn-danger" onClick = {() => deleteSujet(sujet.idSu)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
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

export default Listsujet;