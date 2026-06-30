import React, { useEffect, useState } from 'react'
import './Categories.css'
import OrderDrop from '../../components/Dropdowns/OrderDrop/OrderDrop'
import Card from '../../components/Card/Card'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {
  const { category } = useParams();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      console.log('Fetching meals for category:', category);
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const mealsWithImages = data.meals.filter(meal => meal.strMealThumb);
      console.log('Fetched meals:', mealsWithImages);
      setCards(mealsWithImages);
      setIsLoading(false);
    }
    fetchMeals();
  }, [category]);


  return (
    <div className="container">
              <div className="row">
                <OrderDrop />
                <div className="category__results">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                     cards.map((_, index) => (
                      <Link to={`/recipe/${cards[index]?.idMeal}`} key={index} id="category-card-link"> 
                        <Card image={cards[index]?.strMealThumb} meal={cards[index]?.strMeal} area={cards[index]?.strArea} />
                        </Link>
                    )))}
                </div>
                </div>
    </div>
  )
}

export default Categories
