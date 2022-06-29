import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.scss";
import Products from "../PoductItems/Product";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Product = ({ Category, filter, Sort }) => {
  const [Productdata, setProductdata] = useState("");
  const [filteredProducts, setFiltersProducts] = useState({});

  const handlesubmit = async () => {
    // Add a new document in collection "cities"
    try {
      const docRef = await addDoc(collection(db, "ecommerce"), {
        first: "Ada",
        Product: "JESSIE THUNDER SHOES",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      });
      console.log("Document written with ID: ",setProductdata(docRef) );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  console.log(Productdata)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/products");
      } catch (err) {}
    };
    getProducts();
  }, [Category]);
  console.log(Productdata.id)
  return (
    <div className="Products-Container-m">
      <button onClick={handlesubmit}>vv</button>
      <Link to ={`Singleproduct/${Productdata}`}>
        <Products/>
      </Link>
    </div>
  );
};

export default Product;
