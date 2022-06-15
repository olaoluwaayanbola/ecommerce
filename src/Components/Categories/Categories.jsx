import React from 'react'
import Category from '../CategoriesItem/Category'
const Categories = () => {
    const style = {
        display: "flex",
        padding: "20px",
        justifyContent:" space-between",
        padding:"0 25px",
        gap: "8px",
    }
  return (
    <div style={style}>
        <Category/>
        <Category/>
        <Category/>
        
    </div>
  )
}

export default Categories