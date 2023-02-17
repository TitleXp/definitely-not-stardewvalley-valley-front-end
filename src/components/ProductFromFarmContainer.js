import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductFromFarmContainer = () => {

    const [farm, setFarm] = useState({
        products: []
    })

    const param = useParams()

    // console.log(farm)
    const mappedProducts = farm.products.map(product => (
        <ProductCard {...product} key={product.id} setFarm={setFarm} />
    ))

    


    useEffect(() => { // fetch products
        const fetchProducts = async () => {
          try {
            const resp = await fetch(`/farms/${param.id}`)
            // const resp = await fetch('/products')
            const data = await resp.json()
            setFarm(data)
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
                {mappedProducts}
            </div>
    </div>
  )
}

export default ProductFromFarmContainer