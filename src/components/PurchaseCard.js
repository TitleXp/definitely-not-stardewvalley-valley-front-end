import React from 'react'

const PurchaseCard = ({ id, user_id, product_id, product }) => {
  return (
    <div>
        
        <div>Purchase ID:{id}</div>
        <div>User ID: {user_id}</div>
        <div>Product ID: {product_id}</div>
        <div>Product Name: {product.name}</div>
        

    </div>
  )
}

export default PurchaseCard