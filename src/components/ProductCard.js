import React from 'react'

const ProductCard = ({ id, name, category, description, picture_link, price, stock, farm, setFarm }) => {
  return (
    <>
    <div className="products-box">
        <h3 className="products-name"> Item: {name}</h3>
        <img className="products-image" src={picture_link}></img>
        {/* <p className="products-category">Category: {category}</p> */}
        <p className="products-description"> Description: {description}</p>
        <p className="products-price"> Price: ${price}.00 /lb</p>
        <p className="products-stock"> # In Stock: {stock}</p>
    </div>
</>
  )
}

export default ProductCard