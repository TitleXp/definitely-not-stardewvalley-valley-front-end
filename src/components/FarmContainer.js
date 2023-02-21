import React from 'react'
import { useEffect, useState } from 'react'
import FarmCard from './FarmCard'

const FarmContainer = ({setFarms, farms }) => {

  
  const mappedFarms = farms.map(farm => (
        <FarmCard {...farm} key={farm.id} setFarms={setFarms} />
    ))

  // console.log(mappedFarms)

  return (
    <div>
        FarmContainer
        <div>
            {mappedFarms}            
        </div>
    </div>
  )
}

export default FarmContainer