import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuggestionService from '../../../services/AdminService/SuggestionService';
import './ListSuggestion.css';
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 95,
    },
    thead: {
        minWidth: 135,
    },
    action: {
        minWidth: 290,
    },
});

const ListSuggestion = () => {

    const [suggestions, setSuggestion] = useState([])

    useEffect(() => {

        getAllSuggestions();
    }, [])

    const getAllSuggestions = () => {
        SuggestionService.getAllSuggestion().then((response) => {
            setSuggestion(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteSuggestion = (suggestionId) => {
        SuggestionService.deleteSuggestion(suggestionId).then(res => {
            this.setState({ suggestions: this.state.suggestions.filter(suggestion => suggestion.suggestionId !== suggestionId) });
        });
    }
    const activeSuggestion = (suggestionId) => {
        SuggestionService.active(suggestionId).then(res => {
        })
    }


    const classes = useStyles();
    return (
        <div className='main__container'>
            <h2 className="main__title"> Tous Les Suggestion </h2>
            <Link to="/add-suggestion" className="btn btn-primary mb-2" > Ajouter suggestion </Link>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.table}>
                        <TableRow className={classes.table}>
                            <TableCell className={classes.table}><h6>Le Num de suggestion </h6></TableCell>
                            <TableCell className={classes.thead}><h6>Objet </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Message </h6></TableCell>
                            <TableCell className={classes.action}><h6>Actions </h6></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            suggestions.map(
                                suggestion =>
                                    <TableRow key={suggestion.id}>
                                        <TableCell> {suggestion.id} </TableCell>
                                        <TableCell>{suggestion.objet} </TableCell>
                                        <TableCell>{suggestion.message} </TableCell>
                                        <TableCell>
                                            <Link className="btn btn-info" to={`/edit-suggestion/${suggestion.id}`} >Update</Link>


                                            <button className={suggestion.active === false ? "btn btn-warning" : "btn btn-success"} onClick={() => activeSuggestion(suggestion.id)}
                                                style={{ marginLeft: "10px" }}> Accept</button>


                                            <button className="btn btn-danger" onClick={() => deleteSuggestion(suggestion.id)}
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

export default ListSuggestion;