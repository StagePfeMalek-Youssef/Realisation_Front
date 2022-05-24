import React, { Component } from 'react'
import logo from '../../images/logoMAE.png';

import {Navbar, Collapse,Nav, NavLink, NavbarToggler,Button,NavItem } from 'reactstrap';
import AuthenticationService from '../../services/AuthenticationService';
export class Navigate extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    
        this.state = {
          showUser: false,
          showPM: false,
          showAdmin: false,
          username: undefined,
          login: false
        };
      }
    
      componentDidMount() {
        const user = AuthenticationService.getCurrentUser();
    
        if (user) {
          const roles = [];
    
    
    
          user.authorities.forEach(authority => {
            roles.push(authority.authority)
    
    
    
          });
    
    
          this.setState({
            showUser: true,
            showPM: roles.includes("ROLE_PM") || roles.includes("ROLE_ADMIN"),
            showAdmin: roles.includes("ROLE_ADMIN"),
            login: true,
            username: user.username
          });
    
        }
      }
    
    
      signOut = () => {
        AuthenticationService.signOut();
        this.props.history.push('/home');
        window.location.reload();
      }
    
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
  render() {
    return (
        <Navbar color="dark" dark expand="md">
        <Nav className="mr-auto">
             <NavLink href="#home"><img src={logo} /></NavLink>
         </Nav>
    
             <NavbarToggler onClick={this.toggle}/>
    <Collapse isOpen={this.state.isOpen} navbar>
      {
        this.state.login ? (
          
          <Nav className="ml-auto" navbar>
          
            
           
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Particuliers</NavLink>
            <NavLink href="#pricing">Contact</NavLink>
            <NavItem>
              <NavLink href="#" onClick={this.signOut}>SignOut</NavLink>
            </NavItem>            
          </Nav>               
        ) : (
            <Nav className="ml-auto" navbar>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Particuliers</NavLink>
            <NavLink href="#pricing">Contact</NavLink>
            <Button variant="success" href="/signin" type='submit'>Se Connecter</Button>
            </Nav>
        )
      }
    </Collapse>
        </Navbar>
    )
  }
}

export default Navigate