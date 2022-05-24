import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const SujetCard = (props) => {
  const { id, name, titreSujet } = props.sujet;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/sujet/${id}`, state: { sujet: props.sujet } }}
        >
          <div className="header">{name}</div>
          <div>{titreSujet}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { sujet: props.sujet } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default SujetCard;
