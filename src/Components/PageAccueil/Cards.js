import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import Image1 from '../../images/Voiture.jpg';
import Image2 from '../../images/maison.jpg';
import Image3 from '../../images/Voyage.jpg';
import Image4 from '../../images/santé.jpg';
import Image5 from '../../images/education.jpg';
import Image6 from '../../images/edikhar.jpg';
function Cards(){
    return (
        <div className="cards">
           
              <h1>Les Particuliers</h1>
             
            
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem
                          src={Image1}
                          text="Découvrir notre assurance d'auto pour plus d'informations"
                          label="Assurance d'Auto"
                          path='/produitsDetails'
                        />
                        <CardItem
                          src={Image2}
                          text="Découvrir notre assurance d'habitation pour plus d'informations"
                          label="Assurance d'Habitation"
                          path='/produitsDetails'
                        />
                        <CardItem
                          src={Image3}
                          text="Découvrir notre assurance de voyage pour plus d'informations"
                          label="Assurance De Voyage "
                          path='/produitsDetails'
                        />
                        
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                          src={Image4}
                          text="Découvrir notre assurance de santé pour plus d'informations"
                          label="Assurance De Santé "
                          path='/produitsDetail'
                        />
                    <CardItem
                          src={Image5}
                          text="Découvrir notre assurance d'éducation pour plus d'informations"
                          label="Assurance D'Education "
                          path='/produitsDetails'
                    />
                    <CardItem
                          src={Image6}
                          text="Découvrir notre assurance d'épargne pour plus d'informations"
                          label="Assurance D'Epargne "
                          path='/produitsDetails'
                    />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;