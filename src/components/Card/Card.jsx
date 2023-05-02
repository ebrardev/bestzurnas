import React from 'react'
import './card.css'

const Card = (data) => {
  return (
    <div className="card">
    <img src={data.image} alt={data.name} className="card-image" />
    <div className="card-info">
      <h2 className="card-name">{data.name}</h2>
      <p className="card-city">{data.city}</p>
      <p className="card-price">₺{data.price}</p>
    </div>
  </div>
  )
}

export default Card