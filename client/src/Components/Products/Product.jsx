import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.scss";
import Products from "../PoductItems/Product";

const Product = ({ Category, filter, Sort }) => {
  const [Productdata, setProductdata] = useState([]);
  const [filteredProducts, setFiltersProducts] = useState({});

  
  return (
    <div className="Products-Container-m">
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  );
};

export default Product;
