import React from 'react'

function Bservice(props){
    return(
        <div className='s-box'>
            <img src={props.image} alt='service' />
            <h4 className='fontH4'> {props.name} </h4>
            <a href='#' className=''></a>
            <h4 className='s-btn'>Déclarer</h4>

        </div>
    )
}

export default Bservice;
