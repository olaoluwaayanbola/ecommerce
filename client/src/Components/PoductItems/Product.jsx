import React from "react";
import "./Product.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
const Products = () => {
  const handlesubmit = async () => {
    // Add a new document in collection "cities"
    try {
      const docRef = await addDoc(collection(db, "ecommerce"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="Products-Container">
      <div className="overlay-icons">
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <SearchOutlinedIcon />
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
      <div className="circle"></div>
      <img
        src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
        alt=" "
      />
    </div>
  );
};

export default Products;
