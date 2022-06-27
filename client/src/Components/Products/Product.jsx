import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.scss";
import Products from "../PoductItems/Product";

const Product = ({ Category, filter, Sort }) => {
  const [Productdata, setProductdata] = useState([]);
  const [filteredProducts, setFiltersProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        console.log(res)
      } catch (err) {
        console.log(err +"cowww")
      }
    }
    getProducts();
  }, [Category]);
  
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
