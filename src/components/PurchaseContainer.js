import React from 'react'
import { useEffect, useState } from 'react'
import PurchaseCard from './PurchaseCard'

const PurchaseContainer = ({ currentUser }) => {

  const [purchases, setPurchases]=useState([])

  const mappedPurchases = purchases.map(purchase => (
    <PurchaseCard {...purchase} key={purchase.id} setPurchases={setPurchases} />
))


  useEffect(() => { // fetch purchases
    const fetchPurchases = async () => {
      try {
        const resp = await fetch("/purchases")
        const data = await resp.json()
        setPurchases(data)
        // console.log(data)
        // history.push('/')
          } catch (error) {
            alert(error)
          }
        }
          if(currentUser) {
          fetchPurchases()
          // console.log(purchases)
          // history.push('/')
          }
  }, [])

  console.log(purchases)

  // const [id, user_id, product_id, product] = purchases

  return (

    <div>Purchase Container
      {mappedPurchases}

    </div>
    

  )
}

export default PurchaseContainer