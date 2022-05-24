import React, { Component } from 'react';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import AppNavbar from './AppNavbar';
import { Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import AuthenticationService from '../../services/AuthenticationService';
class RezetPassword1 extends Component {
  constructor(props) {
    super(props);

    this.state = {

      email: "",

    };
  }
  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  doEmail = async (event) => {
    event.preventDefault();

    AuthenticationService.checkeEmail(this.state.email).then(
      (response) => {
        if (response.result == 1) {
          sessionStorage.setItem("emailrezetpassword", this.state.email);
          this.props.history.push('/rezetPasswordSendCode');

        } else {
          alert("Email n'existe pas");
        }
      },

    );
  }


  render() {
    return (
      <div>
      
              <Form  onSubmit={this.doEmail}>
              <Container fluid>
               <Row style={{marginTop:"20px"}}>
                <Col sm="12" md={{ size: 3, offset: 4 }}>
                <FormGroup>
                  <Label for="email"><strong>Email</strong></Label>
                  <Input autoFocus 
                    type="text"
                    name="email" id="email"
                    value={this.state.email}
                    placeholder="Enter email"
                    autoComplete="email"
                    onChange={this.changeHandler}
                    
                  />
                  
                </FormGroup>
  
                
  
                <Button  type="submit" variant="primary" size="lg">
                  Envoyer
                </Button >
                </Col>
                  </Row>
                 </Container>
              </Form>

           

            </div>
    );
  }
}

export default RezetPassword1;