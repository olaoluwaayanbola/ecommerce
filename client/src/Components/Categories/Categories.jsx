import React from 'react'
import Category from '../CategoriesItem/Category'
import styled from "styled-components";


const Categories = () => {
    const style = {
        display: "flex",
        padding: "20px",
        justifyContent:" space-between",
        padding:"0 25px",
        gap: "8px",
    }
const Container = styled.div`
    @media screen and (max-width:680px) {
        flex-direction: column;   
    }
    
`;
  return (
    <Container style={style}>
        <Category/>
        <Category/>
        <Category/>
    </Container>
  )
}

export default Categories