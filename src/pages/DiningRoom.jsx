import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { diningRoom } from '../diningRoom';
import styled from 'styled-components';
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

const DiningRoom = () => {
  const [data,setData]=useState(null)
  function getData(val)
  {
    window.name = 0;
    console.log(val.target.value)
    setData(val.target.value)
    if(val.target.value.trim().length == 0){
      window.name = 0;
    }
    else{
      window.name = parseInt(val.target.value);
    }
  }
  window.flag=3;
  return (
    <div>
    <Navbar/>
   
    <Input
      type="text" onChange={getData}
    />
    <Container>
          {
              diningRoom.map(item => (
              <Product item={item}/>
              ))
        }
      </Container>
    <Footer/>
    </div>
  )
}

export default DiningRoom
