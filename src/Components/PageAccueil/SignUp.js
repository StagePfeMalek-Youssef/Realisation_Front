import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { Alert, Button } from "react-bootstrap"
import logo from "../../images/logo.jpg"
import Authentication from '../../services/AuthenticationService'
import {Link} from 'react-router-dom';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      username: "",
      datenaissance: "",
      codepostal: "",
      telephone: "",
      ville: "",
      cin: "",
      email: "",
      password: "",
      message: "",
      successful: false,
      validForm: true,
      errors: {
        prenom: "",
        nom: "",
        username: "",
        datenaissance: "",
        codepostal: "",
        telephone: "",
        ville: "",
        cin: "",
        email: "",
        password: "",
      }
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;

    let errors = this.state.errors;

    switch (name) {
      case 'prenom':
        errors.prenom =
          value.length < 3
            ? 'Prénom doit contenir au moins 3 caractères !'
            : '';
        break;
      case 'lastname':
        errors.nom =
          value.length < 3
            ? 'Nom doit contenir au moins 3 caractères !'
            : '';
        break;
      case 'username':
        errors.username =
          value.length < 5
            ? 'Nom utilisateur doit contenir au moins 3 caractères !'
            : '';
        break;
      case 'datenaissance':
        errors.datenaissance =
          value.length < 6
            ? 'Date de naissance doit contenir 10 caractères !'
            : '';
        break;
      case 'codepostal':
        errors.codepostal =
          value.length < 4
            ? 'Code postale doit contenir au moins 4 caractères !'
            : '';
        break;
      case 'telephone':
        errors.telephone =
          value.length < 8
            ? 'Téléphone doit contenir 8 caractères !'
            : '';
        break;
      case 'ville':
        errors.ville =
          value.length < 4
            ? 'Ville doit contenir au moins 4 caractères !'
            : '';
        break;

      case 'cin':
        errors.cin =
          value.length < 8
            ? 'Cin doit contenir 8 caractères !'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email pas valide!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Mot de passe doit contenir au moins 6 caractères !'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors)
    })
  }

  signUp = (e) => {
    e.preventDefault();


    Authentication.register(this.state.prenom, this.state.nom, this.state.username, this.state.datenaissance, this.state.codepostal, this.state.telephone, this.state.ville, this.state.cin, this.state.email, this.state.password)
      .then(
        (response) => {
          if (response.result == 1) {
            sessionStorage.setItem("emailactive", this.state.email)
            this.props.history.push('/active');
          } else {
            alert("Email is exist");
          }
        }



      );
  }


  render() {
    const title = <h2>Enregistrer l'utilisateur</h2>;
    const errors = this.state.errors;

    let alert = "";

    if (this.state.message) {
      if (this.state.successful) {
        alert = (
          <Alert variant="success">
            {this.state.message}
          </Alert>
        );
      } else {
        alert = (
          <Alert variant="danger">
            {this.state.message}
          </Alert>
        );
      }
    }

    return (
      <div>
        <AppNavbar/>
        <Container>
          <Row>
          <Col>
          {title}
          </Col>
          </Row>
          <hr />
          <Row>
            <Col>
            <Form onSubmit={this.signUp}>
             <FormGroup controlId="forFirstname">
                <Label for="prenom">Prenom</Label>
                <Input
                  type="text" 
                  placeholder="Entrer prenom"
                  name="prenom" id="prenom"
                  value={this.state.prenom}
                  autoComplete="prenom"
                  onChange={this.changeHandler}
                />
                {
                  errors.prenom && ( 
                      <Alert variant="danger">
                        {errors.prenom}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forNom">
                <Label for="nom">Nom</Label>
                <Input
                  type="text" 
                  placeholder="Entrer ton nom"
                  name="nom" id="nom"
                  value={this.state.nom}
                  autoComplete="nom"
                  onChange={this.changeHandler}
                />
                {
                  errors.nom && ( 
                      <Alert variant="danger">
                        {errors.nom}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forusername">
                <Label for="username">Nom Utilisateur</Label>
                <Input
                  type="text" 
                  placeholder="Entrer le nom utilisateur"
                  name="username" id="username"
                  value={this.state.username}
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
                {
                  errors.nomutili && ( 
                      <Alert variant="danger">
                        {errors.username}
                      </Alert>
                    )
                }
              </FormGroup>
              <FormGroup controlId="fordatenaissance">
                <Label for="datenaissance">Date de naissance</Label>
                <Input
                  type="text" 
                  placeholder="Entrer le date de naissance : AAAA-MM-JJ"
                  name="datenaissance" id="datenaissance"
                  value={this.state.datenaissance}
                  autoComplete="datenaissance"
                  onChange={this.changeHandler}
                />
                {
                  errors.datenaissance && ( 
                      <Alert variant="danger">
                        {errors.datenaissance}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forcodepostal">
                <Label for="datenaissance">Code postale</Label>
                <Input
                  type="text" 
                  placeholder="Entrer le code postal"
                  name="codepostal" id="codepostal"
                  value={this.state.codepostal}
                  autoComplete="codepostal"
                  onChange={this.changeHandler}
                />
                {
                  errors.codepostal && ( 
                      <Alert variant="danger">
                        {errors.codepostal}
                      </Alert>
                    )
                }
              </FormGroup>
              <FormGroup controlId="fortelephone">
                <Label for="telephone">Téléphone</Label>
                <Input
                  type="text" 
                  placeholder="Entrer le telephone"
                  name="telephone" id="telephone"
                  value={this.state.telephone}
                  autoComplete="codepostal"
                  onChange={this.changeHandler}
                />
                {
                  errors.telephone && ( 
                      <Alert variant="danger">
                        {errors.telephone}
                      </Alert>
                    )
                }
              </FormGroup>
              <FormGroup controlId="forville">
                <Label for="ville">Ville</Label>
                <Input
                  type="text" 
                  placeholder="Entrer le ville : Tunis,Sfax,Sousse..."
                  name="ville" id="ville"
                  value={this.state.ville}
                  autoComplete="ville"
                  onChange={this.changeHandler}
                />
                {
                  errors.ville && ( 
                      <Alert variant="danger">
                        {errors.ville}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forcin">
                <Label for="cin">cin</Label>
                <Input
                  type="text" 
                  placeholder="Entrer le cin"
                  name="cin" id="cin"
                  value={this.state.cin}
                  autoComplete="cin"
                  onChange={this.changeHandler}
                />
                {
                  errors.cin && ( 
                      <Alert variant="danger">
                        {errors.cin}
                      </Alert>
                    )
                }
              </FormGroup>


              <FormGroup controlId="formEmail">
                <Label for="email">Email</Label>
                <Input required
                  type="email" 
                  placeholder="Enter Email"
                  name="email" id="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.changeHandler}
                />
                {
                  errors.email && ( 
                      <Alert variant="danger">
                        {errors.email}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="formPassword">
                <Label for="password">Password</Label>
                <Input required 
                  type="password" 
                  placeholder="Enter Password"
                  name="password" id="password"
                  value={this.state.password}
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
                {
                  errors.password && ( 
                      <Alert key="errorspassword" variant="danger">
                        {errors.password}
                      </Alert>
                    )
                }
              </FormGroup>
              <Button variant="primary" type="submit">
               Créer
              </Button>
              {
                !this.state.validForm && (
                  <Alert key="validForm" variant="danger">
                    Please check the inputs again!
                  </Alert>
                )
              }

              {alert}
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
            Deja inscrit? <Link to="/signin">Login</Link>
            </Col>
            </Row>  
        </Container>
       </div>
    );
  }
}

export default SignUp;