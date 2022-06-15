import React from 'react'
import Navbar from '../../Components/Nabar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import Product from '../../Components/Products/Product'
import "./Categorypage.scss"
const Category = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="container-category-page">
          <h3>
              CLOTHES
          </h3>
          <div className="Filter-box">
            <div className="Fiter-one">
                <span>
                  Filter Products:
                </span>
                <select name="" id="">
                  <option value="" disabled selected>Color</option>
                  <option value="">White</option>
                  <option value="">Black</option>
                  <option value="">Red</option>
                  <option value="">Blue</option>
                  <option value="">Yellow</option>
                  <option value="">Green</option>
                </select>
                <select name="" id="">
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">MD</option>
                  <option value="">S</option>
                  <option value="">XS</option>
                </select>
            </div>
            <div className="Filter-two">
                <span>
                  Sort Products:
                </span>
                <select name="" id="">
                  <option value="" selected>New</option>
                  <option value="">price(asl)</option>
                  <option value="">price(asl)</option>
                </select>
            </div>
          </div>
          <Product></Product>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Category