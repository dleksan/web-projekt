import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import { kids } from '../kids';
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

const Kids = () => {

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
  window.flag=4;
  return (
    <div>
    <Navbar/>
    <Input
      type="text" onChange={getData}
    />
       <Container>
          {
              kids.map(item => (
              <Product item={item}/>
              ))
        }
      </Container>
    <Footer/>
    </div>
  )
}

export default Kids
