 
import Bservice from './Bservice';

import Img1 from '../../image/f.jpg';
import Img2 from '../../image/sinistre.jpg';

import Img3 from '../../image/map.jpg';
import styled from "styled-components";
import { mobile } from "../../responsive";
import './Service.css';

    const Container = styled.div`
        background-color: #fff;
        display: flex;
        ${mobile({ flexDirection: "column" })}
    `;

  const Service = () => {
    return (
       <div className='servives'>
           <div className='s-heading'>
               <h3>Notre Service</h3>
             
           </div>
           <Container id='Nos service'>
                <Bservice image={Img1} name="Reclamtion" />
                <Bservice image={Img2} name="En cas de Sinistre" />
               
                <Bservice image={Img3} name="Nos Agences" />
           </Container>

       </div> 
    )

}
export default Service;