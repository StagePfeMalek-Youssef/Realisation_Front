import AppNavbar from './AppNavbar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackendService from '../../services/BackendService';
import { Alert } from "react-bootstrap";
import Bservice from './Bservice';
import './Service.css';
import Img1 from '../../images/f.jpg';
import Img2 from '../../images/sinistre.jpg';
import styled from "styled-components";
import Img3 from '../../images/segg2.jpg';
import { mobile } from "../../responsive";
import './Service.css';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import ChatOutlinedIcon from '@material-ui/icons/Chat'
import MapIcon from '@material-ui/icons/Room';
import ForumIcon from '@material-ui/icons/Forum';
import { BsFillPatchPlusFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { AiTwotoneSnippets } from "react-icons/ai";
const Container = styled.div`
     background-color: #fff;
     display: flex;
     ${mobile({ flexDirection: "column" })}
  `;
  
 
const UserPage = () =>{

  return (
      <>
        <AppNavbar/>
        <div className='services'>
          <div className='s-heading'>
          <h3>Vos opérations</h3>
          </div>
            <Container id='Nos service' className='cont_side'>
              <Link to={'/add-reclamation-user'}><Bservice image={Img1} name="En Cas De Réclamation" /></Link>
              <Link to={'/add-sinistre-user'}><Bservice image={Img2} name="En Cas De Sinistre " /></Link>
              <Link to={'/add-suggestion-user'}><Bservice image={Img3} name="En Cas De Suggestion" /></Link>
          
              <SpeedDial ariaLabel='Navigation speed dial' 
                 sx={{position:'absolute', bottom:16, right: 16, color:'green'}}
                 icon={<SpeedDialIcon color="success"/>}>
                   <SpeedDialAction icon={<ChatOutlinedIcon/>} tooltipTitle='Chat' href="/chat"/>
                   <SpeedDialAction icon={<MapIcon/>} tooltipTitle='Agence' href="/LesAgence"/>
                   <SpeedDialAction icon={<ForumIcon/>} tooltipTitle='Forum de discussion' href="/SujetShow" />
                   <SpeedDialAction icon={<AiTwotoneSnippets/>} tooltipTitle='Declaration des produit' href="/add-produit-user" />
                   <SpeedDialAction icon={<AiFillSetting/>} tooltipTitle='Parametre' href="/parametre" />
                   
                 </SpeedDial>
        </Container>
      </div>
      </>
    );
  }


export default UserPage;