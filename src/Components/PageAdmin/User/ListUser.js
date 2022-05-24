import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminUserService from '../../../services/AdminService/AdminUserService';
import { BsFilePdfFill } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
const ListUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        getAllUsers();
    }, [])

    const getAllUsers = () => {
        AdminUserService.getUsers().then((response) => {
            setUsers(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
      
    
    const deleteUser = (userId) =>{
        AdminUserService.deleteUser(userId).then( res => {
            this.setState({users: this.state.users.filter(user => user.id!== userId)});
        });
    }

    const ExportFile = () =>{
        AdminUserService.getexport().then( response => {
            
            console.log(response.data);
        });
    }


    return (
        <div className='main__container'>

            <h2 className = "main__title"> Tous Les utulisateur </h2>
            <a href='http://localhost:8080/api/auth/admin/export'><FaFileCsv size={50}/></a>
            <a href='http://localhost:8080/api/auth/admin/users/export/pdf'><BsFilePdfFill size={50}/></a>
            <a href='http://localhost:8080/api/auth/admin/users/export/excel'><BsFileEarmarkExcelFill size={50}/></a>
            

            <br></br>
    
                                   
            <Link to = "/add-user" className = "btn btn-primary mb-2" > Ajouter Contrat </Link>
            <table>
            <thead>
                            <th className='th1'> ID</th>
                            <th className='th1'> Prenom </th>
                            <th className='th1'> Nom</th>
                            <th className='th1'> Username</th>
                            <th className='th1'> Date naissance</th>
                            <th className='th1'> Code postal </th>
                            <th className='th1'> Telephone </th>
                            <th className='th1'> Ville </th>
                            <th className='th1'> Date d'ajout</th>
                            <th className='th1'> CIN</th>
                            <th className='th1'> Email</th>
                            <th className='th1'> Password</th>
                            <th> action</th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.prenom}</td>
                            <td>{user.nom}</td>
                            <td>{user.username}</td>
                            <td>{user.datenaissance}</td>
                            <td>{user.codepostal}</td>
                            <td>{user.telephone}</td>
                            <td>{user.ville}</td>
                            <td>{user.dateajout}</td>
                            <td>{user.cin}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-user/${user.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUser;