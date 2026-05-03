import React from 'react'
import './Results.css'
import Dropdowns from '../../components/Dropdowns/Dropdowns'
import Card from '../../components/Card/Card'

const Results = () => {
  return (
    <div className="container">
          <div className="row">
            <Dropdowns />
            <div className="results__container">
              <Card />
            </div>
          </div>
        </div>
  )
}

export default Results
