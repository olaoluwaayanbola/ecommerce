import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.scss";
import Products from "../PoductItems/Product";
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

const Product = ({ Category, filter, Sort }) => {
  const [Productdata, setProductdata] = useState([]);
  const [filteredProducts, setFiltersProducts] = useState({});
  const value = async ()=> {
    const querySnapshot = await getDocs(collection(db, "ecommerce"));
    querySnapshot.forEach((doc) => {
       <Product data={doc.data()} />
    });
  }
  const handlesubmit = async () => {
    // Add a new document in collection "cities"'
    try {
      const docRef = await addDoc(collection(db, "ecommerce"), {
        first: "Ada",
        Product: "JESSIE THUNDER SHOES",
        img: "htts://d3o2e4jr3mxnm3.cloudfront.net/Mns-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="Products-Container-m">
      <Link to={`Singleproduct/98y98y`}>
       <Product/>
      </Link>
    </div>
  );
};

export default Product;
