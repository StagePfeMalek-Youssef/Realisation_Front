import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SujetCard from "./SujetCard";

const ListSujet2 = (props) => {
  const inputEl = useRef("");
  const [sujets, setSujets] = useState([])

    useEffect(() => {

        getAllSujets();
    }, [])

    const getAllSujets = () => {
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

  const renderListSujet = props.sujets.map((sujet) => {
    return (
      <SujetCard
        sujet={sujet}
        clickHander={deleteSujet}
        key={sujet.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Listz Des Forums
        <Link to="/add">
          <button className="ui button blue right">Add Sujet</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderListSujet.length > 0
          ? renderListSujet
          : "No Contacts available"}
      </div>
    </div>
  );
};

export default ListSujet2;
