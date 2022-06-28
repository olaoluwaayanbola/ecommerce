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
        const res = await axios.post("http://localhost:3001/api/products");
      } catch (err) {}
    };
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
