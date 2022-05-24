import React, { Component } from 'react'
import "./Main.css";
import hello from "../../../images/homep3.jpg";
import Chart from "../charts/Chart";
import AuthenticationService from '../../../services/AuthenticationService';
export default class Main extends Component {
    constructor(props) {
        super(props);
  
        this.state = { 
          username: undefined,
        };
      }
     
  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

      this.setState({
        
        username: user.username
      });

    }
  
  render() {
    return (
        <main>
        <div className='main__container'>
            <div className='main__title'>
                
                <div className='main__greeting'>
                    <h1>Hello {this.state.username}</h1>
                    <p>Binvenue Chez Admin Dashboard</p>
                </div>
               </div>
              
                
        </div>
      </main>
    )
  }
}

