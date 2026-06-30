import React, { useState } from 'react'
import './Card.css'

function Card({ meal, image, area, category }) {
  const [isHovering, setIsHovering] = useState(false);

  const isMealLong = meal && meal.length > 18;

  return (
    <div className='card' 
    style={{ backgroundImage: `url(${image? image: 'https://tse2.mm.bing.net/th/id/OIP.03VsueF0bkEMTgH1hwODLAHaE7?pid=ImgDet&w=208&h=138&c=7&dpr=1.3&o=7&rm=3'})` }}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}>
      <div className={`card__text ${isMealLong ? 'scrolling-text' : ''}`}>
      <p>{isHovering ? area || 'Region not specified' : meal }</p>
      <p>{isHovering ? category || 'Category not specified' : ''}</p>
      </div>
      <div className={`card__overlay ${isHovering ? 'visible' : ''}`}>
      </div>
    </div>
  )
}

export default Card
