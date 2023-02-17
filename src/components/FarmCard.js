import React from 'react'
import { Link } from 'react-router-dom'

const FarmCard = ({ id, name, location}) => {
  return (
    <>
    <div>
    <Link className="farm-name" to={`/farms/${id}`}>{name}</Link>
        <div className="farm-box">
        <p>{id} </p>
        <p className="farm-location">Location: {location}</p>
        </div>
        {/* {mappedProducts} */}

        </div>
</>
  )
}

export default FarmCard