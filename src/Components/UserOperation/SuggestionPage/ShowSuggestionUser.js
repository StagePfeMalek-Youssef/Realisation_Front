import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuggestionService from '../../../services/AdminService/SuggestionService';
import AppNavbar from '../../PageAccueil/AppNavbar';


const ShowSuggestionUser = () => {

    const [suggestions, setSuggestion] = useState([])
    const username=sessionStorage.getItem("UserName");
    useEffect(() => {

        getAllSuggestions();
    }, [])

    const getAllSuggestions = () => {
        SuggestionService.getAllSuggestionByUsername(username).then((response) => {
            
                setSuggestion(response.data);
                console.log(response.data); 
            
            
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteSuggestion = (suggestionId) =>{
        SuggestionService.deleteSuggestion(suggestionId).then( res => {
            this.setState({suggestions: this.state.suggestions.filter(suggestion => suggestion.suggestionId!== suggestionId)});
        });
    }



    return (
        <>
        <AppNavbar/>
        <div className='main__container'>
            <h2 className = "main__title"> Vos suggestions </h2>
            
          
                    {
                        suggestions.map(
                            suggestion=>
                            <section className="sujet">
                            <article>
                            <div key = {suggestion.id}> 
                            <p> la suggestion est créé à {suggestion.dateDeclaration} par <div className="btn btn-outline-primary">{suggestion.username}</div> </p><br></br>
                            <p> {suggestion.message} </p>
                            <p>             
                
                      <button className = "btn btn-danger" onClick = {() =>deleteSuggestion(suggestion.id)}
                      style = {{marginLeft:"10px"}}> Delete</button>
 
                  </p>
                            </div>
                            </article></section>
                        )
                    }
    </div>
    </>
    )
}

export default ShowSuggestionUser;