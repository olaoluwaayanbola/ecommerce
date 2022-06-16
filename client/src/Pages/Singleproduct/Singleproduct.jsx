import React from 'react'
import "./Singleproducts.scss"
import Navbar from '../../Components/Nabar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Singleproduct = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className='Singleproduc-container'>
            <div className="img-container-sp">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
            </div>
            <div className="Info-container-sp">
                <div className="one">
                    <h3>
                        Denim Jacket
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Aliquam illum nemo, rerum nostrum earum accusantium repellendus qui animi
                        nisi soluta dolore. 
                        Nulla iusto est deleniti provident cupiditate harum neque pariatur.
                    </p>
                    <span className="price">
                        $20
                    </span>
                </div>
                <div className="Filter-box">
                    <div className="Color-box">
                        <span className="title">
                            Colors:
                        </span>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="Filter-Size">
                        <span className="title2">
                            Size
                        </span>
                        <select name="" id="">
                            <option value="">XL</option>
                            <option value="">L</option>
                            <option value="">MD</option>
                            <option value="">S</option>
                            <option value="">XS</option>
                        </select>
                    </div>
                </div>
                <div className="Quantity-Box">
                    <div className="Add-sub">
                        <RemoveIcon/>
                        <div className="amount">
                            9
                        </div>
                        <AddIcon/>
                    </div>
                    <button className='btn'>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
    </>
  )
}

export default Singleproduct