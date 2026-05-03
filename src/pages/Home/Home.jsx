import React from 'react'
import './Home.css'
import HomeRecipes from '../../components/HomeRecipes/HomeRecipes'


const Home = () => {
  return (
        <div className="container landing">
          <div className="row landing__row">
            <h1 className="title">
              Recipes for every <span className="taste"> Taste Bud</span>
            </h1>
            <HomeRecipes />
        
            <h2 className="subtitle">What are you cooking with?</h2>
            <form>
                <input type="text" name='ingredient' id='ingredient' placeholder='Ingredient'/>
                <input type="submit" id='ingredient__lookup' value="Let's Cook Something Up" />
            </form>
            
            </div>
          </div>   
  )
}

export default Home
