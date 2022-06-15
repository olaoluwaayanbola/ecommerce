import React from 'react'
import "./Product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Products = () => {
  return (
    <div className='Products-Container'>
      <div className="overlay-icons">
        <div className="icon">
          <ShoppingCartOutlinedIcon/>
        </div>
        <div className="icon">
          <SearchOutlinedIcon/>
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon/>
        </div>
      </div>
      <div className="circle"></div>
      <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt=" "/>
    </div>
  )
}

export default Products