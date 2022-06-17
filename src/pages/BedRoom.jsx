import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import { bedroom } from '../bedroom';
import Product from '../components/Product';
const Container = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: 25% 25% 25% 25%;
    justify-content: space-between;
`;

const Input = styled.input`
  margin: 40px 40px;
`;

const BedRoom = () => {
  const [data,setData]=useState(null)
  function getData(val)
  {
    window.name = 0;
    console.log(window.location.pathname);
    console.log(window.location.href);
    setData(val.target.value)
    if(val.target.value.trim().length == 0){
      window.name = 0;
    }
    else{
      window.name = parseInt(val.target.value);
    }

   
    
  }

  window.flag=2;
  return (
    <div>
    <Navbar/>
   
    <Input
      type="text" onChange={getData}
    />
       <Container>
          {
              bedroom.map(item => (
              <Product item={item}/>
              ))
        }
      </Container>
    
    <Footer/>
    </div>
  )
}



export default BedRoom
