import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
        //Setting recipe data and title
        setRecipeTitle(data.meals[0].strMeal);
        //Setting recipe image
        setRecipeImage(
          `${data.meals[0].strMealThumb}/medium` ||
            "https://tse2.mm.bing.net/th/id/OIP.03VsueF0bkEMTgH1hwODLAHaE7?pid=ImgDet&w=208&h=138&c=7&dpr=1.3&o=7&rm=3",
        );
        //Setting ingredients/measurements by looping and pushing to new array
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
        //Setting recipe instructions
        setRecipeInstructions(data.meals[0].strInstructions);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }
    fetchMealDetails();
  }, [id]);

  return (
    <div id="recipes__body">
      <main id="recipes__main">
        <div className="recipes__container">
          <div className="row">
            <div className="recipe__selected--top">
              <div className="back__btn" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon="arrow-left" className="recipe__icon" />
                <h3 className="recipe__back">Back</h3>
              </div>
              <div className="bookmark__container">
                <FontAwesomeIcon icon="bookmark" />
              </div>
            </div>
            <div className="image__container">
              <img
                src={recipeImage}
                alt={recipeTitle}
                className="meal__image"
              />
            </div>
            <div className="recipe__selected--content">
              <h1 className="recipe__title">{recipeTitle}</h1>
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
        </div>
      </main>
    </div>
  );
};

export default Meal;
