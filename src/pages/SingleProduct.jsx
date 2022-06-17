import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { livingRoom } from '../livingRoom';
import { kitchen } from '../kitchen';
import { bedroom } from '../bedroom';
import { diningRoom } from '../diningRoom';
import { kids } from '../kids';
import { bathroom } from '../bathroom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom'


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    widht: 400px;
    height: 350px;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 600;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`;

const Button = styled.button`
    margin: 40px;
    padding: 15px;
    border: 1px solid teal;
    backgroud-color: white;
    cursor: pointer;
`;

const SingleProduct = ({match}) => {
    const {id} = useParams();
    
    const livingRoomProduct = livingRoom.find((p) => p.id === id);
    const bedroomProduct = bedroom.find((p) => p.id === id);
    const diningRoomProduct = diningRoom.find((p) => p.id === id);
    const kidsProduct = kids.find((p) => p.id === id);
    const kitchenProduct = kitchen.find((p) => p.id === id);
    const bathroomProduct = bathroom.find((p) => p.id === id);
    
 if(window.flag=="1")
 {
     return (
       <Container>
           <Navbar/>
           <Wrapper>
               <ImgContainer>
                   
               <Image src = {livingRoomProduct.img}/>
                
               </ImgContainer>
               <InfoContainer>
                   <Title>
                       {livingRoomProduct.name}
                      
                   </Title>
                   <Desc>
                       {livingRoomProduct.description}
                      
                   </Desc>
                   <Price>
                       {livingRoomProduct.price + " kn"}
                      
                   </Price>
                   <Button>Dodaj u košaricu</Button>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
     )
     
 }
 
 else if(window.flag=="2")
 {
     return (
       <Container>
           <Navbar/>
           <Wrapper>
               <ImgContainer>
                   
               <Image src = {bedroomProduct.img}/>
                
               </ImgContainer>
               <InfoContainer>
                   <Title>
                       {bedroomProduct.name}
                      
                   </Title>
                   <Desc>
                       {bedroomProduct.description}
                      
                   </Desc>
                   <Price>
                       {livingRoomProduct.price + " kn"}
                      
                   </Price>
                   <Button>Dodaj u košaricu</Button>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
     )
     
 }

 else if(window.flag=="3")
 {
     return (
       <Container>
           <Navbar/>
           <Wrapper>
               <ImgContainer>
                   
               <Image src = {diningRoomProduct.img}/>
                
               </ImgContainer>
               <InfoContainer>
                   <Title>
                       {diningRoomProduct.name}
                      
                   </Title>
                   <Desc>
                       {diningRoomProduct.description}
                      
                   </Desc>
                   <Price>
                       {diningRoomProduct.price + " kn"}
                      
                   </Price>
                   <Button>Dodaj u košaricu</Button>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
     )
     
 }

 else if(window.flag=="4")
 {
     return (
       <Container>
           <Navbar/>
           <Wrapper>
               <ImgContainer>
                   
               <Image src = {kidsProduct.img}/>
                
               </ImgContainer>
               <InfoContainer>
                   <Title>
                       {kidsProduct.name}
                      
                   </Title>
                   <Desc>
                       {kidsProduct.description}
                      
                   </Desc>
                   <Price>
                       {kidsProduct.price + " kn"}
                      
                   </Price>
                   <Button>Dodaj u košaricu</Button>
               </InfoContainer>
           </Wrapper>
           <Footer/>
       </Container>
     )
     
 }



 else if(window.flag=="5")
 {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    
                <Image src = {kitchenProduct.img}/>
                 
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {kitchenProduct.name}
                       
                    </Title>
                    <Desc>
                        {kitchenProduct.description}
                       
                    </Desc>
                    <Price>
                        {kitchenProduct.price + " kn"}
                       
                    </Price>
                    <Button>Dodaj u košaricu</Button>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
      )
    }

else if(window.flag=="6")
 {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    
                <Image src = {bathroomProduct.img}/>
                 
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {bathroomProduct.name}
                       
                    </Title>
                    <Desc>
                        {bathroomProduct.description}
                       
                    </Desc>
                    <Price>
                        {bathroomProduct.price + " kn"}
                       
                    </Price>
                    <Button>Dodaj u košaricu</Button>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
      )
    }
 }
 


export default SingleProduct
