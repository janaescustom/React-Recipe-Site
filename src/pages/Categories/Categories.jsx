import React from 'react'
import './Categories.css'
import Dropdowns from '../../components/Dropdowns/Dropdowns'

const Categories = () => {
  return (
    <div class="container">
              <div class="row">

                <Dropdowns />
                <div className="category__results">
                    <div className="category__filtered card">
                        <div className="card__text">
                            <p>Italian</p>
                        </div>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Categories
