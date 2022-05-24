import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    YouTube,
    Room,
    LinkedIn,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../../responsive";
  

  const Container = styled.div`
    background-color: #568203;
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  

  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MAE Assurance</Logo>
          <Desc>
          La MAE Assurances accompagne les personnes pour bâtir,
          protéger et valoriser ce qu’elles considèrent comme essentiel
          à leur sécurité financière individuelle et collective en leur
          donnant accès à des produits et services personnalisés.
          </Desc>
          <SocialContainer>
             <a href="https://www.facebook.com/contact.mae.tn">
               <SocialIcon color="3B5999">
              <Facebook/>
            </SocialIcon>
            </a>
            <a href="https://www.instagram.com/assurancemae/">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            </a>
            <a href="https://www.linkedin.com/company/mae-assurance/">
            <SocialIcon color="55ACEE">
              <LinkedIn />
            </SocialIcon>
            </a>
            <a href="https://www.youtube.com/channel/UCgnpFvFqaNa1MU5dQO3iCwA">
            <SocialIcon color="E60023">
              <YouTube />
            </SocialIcon>
            </a>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Complexe El Mechtel, Avenue Ouled Haffouz Bab El Khadra 1075 Tunis
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 70 020 300
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 71 845 440
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> mae.assurance@mae.tn
          </ContactItem>
          
        </Right>
      </Container>
    );
  };
  
  export default Footer;