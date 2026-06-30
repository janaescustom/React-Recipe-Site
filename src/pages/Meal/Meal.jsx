import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = () => {
  const { id } = useParams();
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState("");

  useEffect(() => {
    async function fetchMealDetails() {
      const ingredientList = [];
      const measurementList = [];
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setRecipeTitle(data.meals[0].strMeal);
        setRecipeImage(data.meals[0].strMealThumb);
        for (let i = 1; i <= 20; i++) {
          const ingredient = data.meals[0][`strIngredient${i}`];
          const measurement = data.meals[0][`strMeasure${i}`];
          if (ingredient) {
            ingredientList.push(ingredient);
          }
          if (measurement) {
            measurementList.push(measurement);
          }
        }
        setRecipeIngredients(ingredientList);
        setMeasurements(measurementList);
        setRecipeInstructions(data.meals[0].strInstructions);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }
    fetchMealDetails();
    // console.log('Meal name:', recipeTitle);
  }, [id]);

  return (
    <div id="recipes__body">
      <main id="recipes__main">
        <div className="recipes__container">
          <div className="row">
            <div className="recipe__selected--top">
              <div className="back__btn">
                <Link to="/results" className="recipe__link">
                <FontAwesomeIcon icon="arrow-left" className="recipe__icon" />
                <h3 className="recipe__back">All Meals</h3>
                </Link>
              </div>
              <div className="bookmark__container">
                <FontAwesomeIcon icon="bookmark" />
              </div>
            </div>
                <img
                  src={recipeImage}
                  alt={recipeTitle}
                  className="meal__image"
                />

            <h1 className="meal__title">{recipeTitle}</h1>

            <div className="ingredients__table">
              <h2>Ingredients</h2>
              <ul className="ingredient__list">
                {recipeIngredients.map((ingredient, index) => (
                  <li key={index}>
                    {measurements[index]} {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <h2>Instructions</h2>
            <p className="instructions">{recipeInstructions}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Meal;
