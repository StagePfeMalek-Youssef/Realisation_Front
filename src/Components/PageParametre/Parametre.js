import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminUserService from '../../services/AdminService/AdminUserService'
import AppNavbar from '../PageAccueil/AppNavbar';

class Parametre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
           userid:sessionStorage.getItem("UserId"),
            user: {}
        }
    }
  
    componentDidMount(){
        AdminUserService.getuserById(this.state.userid).then( res => {
            this.setState({user: res.data});
        })
    }
   

    render() {
        return (
            <div>
                 <AppNavbar/>
                <br></br>
                <div className="row" >
               
                    <h3 className = "col-md-6 mx-auto text-center"> Votre profile</h3>
                    <div>
                        <div className = "text-center">
                         Utilisateur {this.state.user.prenom}  {this.state.user.nom} créé le {this.state.user.dateajout}<br></br>
                         avec email :{this.state.user.email}<br></br>

                         <Link  to={`/changePassword`} >Changer mot de passe </Link>||<Link  to={`/ChangeInfo`} >Changer Information </Link>

                        </div>
                        
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default Parametre