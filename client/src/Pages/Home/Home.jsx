import React from 'react'
import Navbar from '../../Components/Nabar/Navbar'
import Alerts from '../../Components/Alerts/Alerts'
import Carousel from '../../Components/Carousel/Carousel'
import Categories from '../../Components/Categories/Categories'
import Product from '../../Components/Products/Product'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import {Footer} from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Alerts></Alerts>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Categories></Categories>
        <Product></Product>
        <NewsLetter/>
        <Footer></Footer>
    </div>
  )
}

export default Home