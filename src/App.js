
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import HomeAdmin from './Components/pages/HomeAdmin';
import Login from './Components/PageAccueil/Login';
import SignUp from './Components/PageAccueil/SignUp';
import RezetPassword1 from './Components/PageAccueil/RezetPassword1'
import RezetPassword2 from './Components/PageAccueil/RezetPassword2'
import ActivePage from './Components/PageAccueil/ActivePage'
import Profile from './Components/PageAccueil/Profile'
import UserPage from './Components/PageAccueil/UserPage';
import ProjectManagerPage from './Components/PageAccueil/ProjectManagerPage';
import ListProduitAdmin from './Components/PageAdmin/Produit/ListProduitAdmin';
import AddProduitAdmin from './Components/PageAdmin/Produit/AddProduitAdmin';
import AddContratAdmin from './Components/PageAdmin/Contrat/AddContratAdmin';
import ListContratAdmin from './Components/PageAdmin/Contrat/ListContratAdmin';
import ListUserAdmin from './Components/PageAdmin/User/ListUserAdmin';
import AddUserAdmin from './Components/PageAdmin/User/AddUserAdmin';
import ListeSinistreAdmin from './Components/PageAdmin/Sinistre/ListeSinistreAdmin';
import AddSinistreAdmin from './Components/PageAdmin/Sinistre/AddSinistreAdmin';
import ChatRoom from './Components/PageChat/ChatRoom';
import AddReclamationAdmin from './Components/PageAdmin/Reclamation/AddReclamationAdmin';
import ListReclamationAdmin from './Components/PageAdmin/Reclamation/ListReclamationAdmin';

import LesAgence from './Components/UserOperation/LesAgence';
import AjouterReclamation from './Components/UserOperation/Reclamation/AjouterReclamation';
import Parametre from './Components/PageParametre/Parametre';
import ChangePassword from './Components/PageParametre/ChangePassword';
import ChangeInfo from './Components/PageParametre/ChangeInfo';
import ListsujetAdmin from './Components/PageAdmin/Sujet/ListsujetAdmin';
import AddsujetAdmin from './Components/PageAdmin/Sujet/AddsujetAdmin';
import AjouteSujet from './Components/UserOperation/Sujets/AjouteSujet';
import SujetShow from './Components/UserOperation/Sujets/SujetShow';
import AjouteCommentaire from './Components/UserOperation/Sujets/AjouteCommentaire';
import Sujet from './Components/UserOperation/Sujets/Sujet';

import ShowComment from './Components/UserOperation/Sujets/ShowComment ';
import ListSuggestionAdmin from './Components/PageAdmin/Suggestion/ListSuggestionAdmin';
import AddSuggestionAdmin from './Components/PageAdmin/Suggestion/AddSuggestionAdmin';
import AddSuggestionUser from './Components/UserOperation/SuggestionPage/AddSuggestionUser';
import ShowSuggestionUser from './Components/UserOperation/SuggestionPage/ShowSuggestionUser';

import Updatesujet from './Components/UserOperation/Sujets/Updatesujet';
import ListCommentaireAdmin from './Components/PageAdmin/Commentaire/ListCommentaireAdmin';
import AddCommentaireAdmin from './Components/PageAdmin/Commentaire/AddCommentaireAdmin';
import ShowReclamation from './Components/UserOperation/Reclamation/ShowReclamation';
import AjouterSinistre from './Components/UserOperation/Sinistre/AjouterSinistre';
import ShowSinistre from './Components/UserOperation/Sinistre/ShowSinistre';
import AjoutProduit from './Components/UserOperation/Produit/AjoutProduit'
import ShowProduit from './Components/UserOperation/Produit/ShowProduit';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/home' exact={true} component={Home} />
          <Route path="/Admin" component={HomeAdmin} />      
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path ="/rezetPasswordSendEamil" exact={true} component = {RezetPassword1}></Route>
          <Route path ="/rezetPasswordSendCode" exact={true} component = {RezetPassword2}></Route>
          <Route path ="/active" exact={true} component = {ActivePage}></Route>
          <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/user' exact={true} component={UserPage}/>
          <Route path='/pm' exact={true} component={ProjectManagerPage}/>
          <Route path='/chat' exact={true} component={ChatRoom}/>

          <Route path="/edit-sujetuser/:id" component={Updatesujet} />
          <Route path="/AjouteSujet" component={AjouteSujet}/>
          <Route path="/SujetShow" component={SujetShow}/>
          <Route path="/ViewSujet/:id" component={Sujet}/>
          <Route path="/comment" component={AjouteCommentaire}/>
          <Route path="/showcomment" component={ShowComment}/>

          <Route path='/parametre' exact={true} component={Parametre}/>
          <Route path='/changePassword' exact={true} component={ChangePassword}/>
          <Route path='/ChangeInfo' exact={true} component={ChangeInfo}/>

          <Route path='/add-suggestion-user' exact={true} component={AddSuggestionUser}/>
          <Route path='/show-suggestion-user' exact={true} component={ShowSuggestionUser}/>

          <Route path="/add-produit-user" component={AjoutProduit}/>
          <Route path="/edit-produit-user/:id" component={AjoutProduit}/>
          <Route path="/lesproduits" component={ShowProduit}/>

          <Route path="/lessinistres" component={ShowSinistre}/>
          <Route path="/add-sinistre-user" component={AjouterSinistre}/>
          <Route path="/edit-sinistre-user/:id" component={AjouterSinistre}/>

          <Route path="/lesreclamations" component={ShowReclamation}/>
          <Route path="/add-reclamation-user" component={AjouterReclamation}/>
          <Route path="/edit-reclamation-user/:id" component={AjouterReclamation}/>

          ////////////////////////////////////////////////////////
          <Route path='/Listusers' exact={true} component={ListUserAdmin}/>
          <Route path='/add-user' exact={true} component={AddUserAdmin}/>
          <Route path="/edit-user/:id" component={AddUserAdmin}/>
          ////////////////////////////////////////////////////////////
          <Route path="/contrats" component={ListContratAdmin} />
          <Route path="/add-contrat" component={AddContratAdmin}/>
          <Route path="/edit-contrat/:id" component={AddContratAdmin}/>
          ////////////////////////////////////////////////////////////////
          <Route path="/produits" component={ListProduitAdmin}/>
          <Route path="/add-produit" component={AddProduitAdmin}/>
          <Route path="/edit-produit/:id" component={AddProduitAdmin} />
          //////////////////////////////////////////////////////////////
          <Route path="/sinistres" component={ListeSinistreAdmin}/>
          <Route path="/add-sinistre" component={AddSinistreAdmin}/>
          <Route path="/edit-sinistre/:id" component={AddSinistreAdmin}/>
          //////////////////////////////////////////////////////////////
          <Route path="/reclamations" component={ListReclamationAdmin}/>
          <Route path="/add-reclamation" component={AddReclamationAdmin}/>
          <Route path="/edit-reclamation/:id" component={AddReclamationAdmin}/>
          //////////////////////////////////////////////////////////////////
          <Route path="/ListeSujet" component={ListsujetAdmin}/>
          <Route path="/add-sujet" component={AddsujetAdmin}/>
          <Route path="/edit-sujet/:id" component={AddsujetAdmin} />
          //////////////////////////////////////////////////////////////////
          <Route path="/suggestions" component={ListSuggestionAdmin}/>
          <Route path="/add-suggestion" component={AddSuggestionAdmin}/>
          <Route path="/edit-suggestion/:id" component={AddSuggestionAdmin}/>
          //////////////////////////////////////////////////////////////////
          <Route path="/Commentaires" component={ListCommentaireAdmin}/>
          <Route path="/add-commantaire" component={AddCommentaireAdmin}/>
          <Route path="/edit-commantaire/:id" component={AddCommentaireAdmin}/>



          <Route path="/LesAgence" component={LesAgence} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
