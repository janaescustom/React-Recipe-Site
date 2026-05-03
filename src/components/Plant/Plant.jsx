import React from 'react'
import './Plant.css'
import top_mouth from '../../assets/top-mouthBG.png'
import bottom_mouth from '../../assets/bottom-mouthBG.png'

const Plant = () => {
  return (
    <div>
      <div id="svg-container" className="svg-container">
              <div className="eating-plant planter-box">
                <img
                  src={top_mouth} alt='plant'
                  className="eating-plant top-mouth"
                />
                <img
                  src={bottom_mouth} alt='plant'
                  className="eating-plant bottom-mouth"
                />
              </div>
            </div>
    </div>
  )
}

export default Plant
