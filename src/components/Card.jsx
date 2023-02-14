import React from 'react'
import '../styles/Card.css'

function Card({ type, time }) {
  return(
    <div className={type}>
      <p>{time}</p>
    </div>
  )
}

export default Card