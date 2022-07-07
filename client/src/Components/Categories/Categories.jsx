import React from "react";
import Category from "../CategoriesItem/Category";
import styled from "styled-components";
import { ImageSrc } from "../CategoriesItem/imageSrc";

const Categories = () => {
  const style = {
    display: "flex",
    padding: "20px",
    justifyContent: " space-between",
    padding: "0 25px",
    gap: "8px",
  };
  const Container = styled.div`
    @media screen and (max-width: 680px) {
      flex-direction: column;
    }
  `;
  return (
    <Container style={style}>
      {ImageSrc.map((src) => {
        return <Category img={src} />
      })}
    </Container>
  );
};

export default Categories;
