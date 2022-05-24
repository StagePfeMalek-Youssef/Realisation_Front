import React, { Component } from 'react';
import AuthenticationService from "../../services/AuthenticationService";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Form, FormGroup, Button, FormControl } from 'react-bootstrap';
import loginIcon from '../../images/logo.jpg'
import uiImg from '../../images/login.png';
import './Login.css';
import AppNavbar from './AppNavbar';
import SocialService from '../../services/SocialService';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Input } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {

      email: "",
      password: "",
      emailSocial:sessionStorage.getItem("email"),
      passwordSocial:"kasdjhfkadhsY776ggTyUU65khaskdjfhYuHAwjnlji",
      error: "",
      token:sessionStorage.getItem("google")
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }


  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService.useractive(this.state.email, this.state.password).then(
      (response) => {
        let ac = response.active;
        console.log(this.ac);
        if (ac == 1) {
          AuthenticationService.signin(this.state.email, this.state.password).then(
            (res) => {
              AuthenticationService.findRole(this.state.email, this.state.password).then(
                (respp)=>{
                  sessionStorage.setItem("UserName", respp.username);
                  sessionStorage.setItem("UserId", respp.id);
                  sessionStorage.setItem("nomloign", respp.nom);
                  sessionStorage.setItem("prenomloign", respp.prenom);
                if(respp.roles=="ROLE_ADMIN"){
                  this.props.history.push('/admin');
                }else{
                  this.props.history.push('/profile');
                }
                  
                  
                  
        
               
                 
                }
              )
             
              
             
            }
          )
        } else if (ac === 0) {
          sessionStorage.setItem("emailactive", this.state.email);
          this.props.history.push('/active');
        } else {
          alert("ereur");
        }
      },

    );
  }
  responceGoogle=(response)=>{
       
    console.log(response.tokenId);
    console.log(this);
    SocialService.loginWithGoogle(response.tokenId).then(data=> {
      AuthenticationService.signin(data.email,this.state.passwordSocial).then(
        ()=>{

          AuthenticationService.signin(data.email,this.state.passwordSocial).then(
         ()=>{
          
          this.props.history.push('/profile');
        }
    );
        }
    );
  });
    
}
responseFacebook = response => {
  console.log(response.accessToken);
  SocialService.loginWithFacebook(response.accessToken).then(data=> {
    AuthenticationService.signin(data.email,this.state.passwordSocial).then(
      ()=>{
        this.props.history.push('/profile');
      }
  );
 });
}
componentClicked = () => console.log("clicked");
  render() {
    return (
      <div>
           
          <AppNavbar/>
          <div className='login'>
          <h1 className='loginTitle'>Se connecter</h1>
            <div className='wrapperLogin'>
              <div className='left'>
                <div className='loginButton google'>
                  <GoogleLogin
                    clientId='1067196279977-99ar67di0jnm0el8b5ase1llqb74jphh.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={this.responceGoogle}
                    onFailure={this.responceGoogle}
                    cookiePolicy={'single_host_origin'}
                  />  
                </div>
                <div className='loginButton facebook'>
                <FacebookLogin
                    className='face'
                    appId="640459680575561"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                 />
                </div>
              </div>
              <div className='center'>
                <div className='line' />
                <div className='or'>OR</div>
              </div>
              <div className='right'>
                <Form  onSubmit={this.doLogin} >
                   <FormGroup>
                  
                  <Input  className='inputF' autoFocus 
                    style={{widh: '25%'}}
                    type="text"
                    name="email" id="email"
                    value={this.state.email}
                    placeholder="Enter email"
                    autoComplete="email"
                    
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Input  className='inputF' type="password" 
                    name="password" id="password"
                    value={this.state.password}
                    placeholder="Enter Password"
                    autoComplete="password"
                    onChange={this.changeHandler}
                  />
                </FormGroup>
  
                <Button  type="submit" variant="success" size="lg" className='submit'>
                  Sign In
                </Button >
                <br></br>
                <Link to="/rezetPasswordSendEamil" className='reset'>Mot de passe oublier</Link>
                </Form>
              </div>
              </div>
              </div>
        </div>

    );
  }
}
export default Login;