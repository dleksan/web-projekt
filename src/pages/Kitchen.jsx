import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import { kitchen } from '../kitchen';
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
const Kitchen = () => {
  const [data,setData]=useState(null)
  function getData(val)
  {
    window.name = 0;
    
    setData(val.target.value)
    if(val.target.value.trim().length == 0){
      window.name = 0;
    }
    else{
      window.name = parseInt(val.target.value);
    }
  }
  window.flag=5;
  console.log(window.flag);
  
  return (
    <div>
    <Navbar/>
   
    <Input
      type="text" onChange={getData}
    />
       <Container>
          {
              kitchen.map(item => (
              <Product item={item}/>
              ))
        }
      </Container>
    
    <Footer/>
    </div>
  )
}

export default Kitchen



