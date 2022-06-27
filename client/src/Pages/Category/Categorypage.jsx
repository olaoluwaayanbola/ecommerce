import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Nabar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import Product from "../../Components/Products/Product";
import "./Categorypage.scss";
import { useLocation, useParams } from "react-router-dom";
const Category = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[2];
  const [filter, setFilter] = useState();
  const [Sort, setSort] = useState("new");
  console.log(category);
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFilter((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-category-page">
        <h3>CLOTHES</h3>
        <div className="Filter-box">
          <div className="Fiter-one">
            <span>Filter Products:</span>
            <select name="color" onChange={handleChange} value={filter}>
              <option value="" disabled>
                Color
              </option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
            <select name="size" onChange={handleChange} id="">
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="MD">MD</option>
              <option value="S">S</option>
              <option value="XS">XS</option>
            </select>
          </div>
          <div className="Filter-two">
            <span>Sort Products:</span>
            <select value={Sort} onChange={handleSort} id="">
              <option value="New" defaultValue>
                New
              </option>
              {console.log(Sort)}
              <option value="price(asl)">price(asl)</option>
              <option value="price(desc)">price(desc)</option>
            </select>
          </div>
        </div>
        <Product Category={Category} Sort={Sort} filter={filter}></Product>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Category;
