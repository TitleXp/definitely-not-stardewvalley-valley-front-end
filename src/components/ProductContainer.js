import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductContainer = () => {

    const [products, setProducts] = useState([])

    const param = useParams()

    useEffect(() => { // fetch products
        const fetchProducts = async () => {
          try {
            const resp = await fetch(`http://localhost:3000/farms/${param.id}`)
            const data = await resp.json()
            setProducts(data)
          } catch (error) {
            alert(error)
          }
        }
        fetchProducts()
    }, [])

  return (
    <div>
        ProductContainer
            <div>

            </div>
    </div>
  )
}

export default ProductContainer