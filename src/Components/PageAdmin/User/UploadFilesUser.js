import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { Component } from 'react'

export default class UploadFilesUser extends Component {
    state = {
        file : '',
        error: '',
        msg: ''
    };
    
    componentDidMount = () => {
        const {file} = this.props;
        this.setState({ file })
    };
    
    
    uploadFile = ({target : {files}}) => {
        console.log(files[0])
 
        let file = new FormData();
        file.append('file', files[0]);    
        console.log(file);
        axios.post("http://localhost:8080/api/auth/admin/upload", file)
        .then(response => {
            let ac = response.data.result;
            console.log(ac);
            if(ac==0){
                alert("change csv file ou fichier incommpatible");
               
            }else{
                
                alert("Sucessfully uploaded file");
            }
            
               
            

        },)

            
         
    };
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" onChange={this.uploadFile}/>
                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

