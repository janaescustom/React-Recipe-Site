import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeRecipes.css";

const HomeRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetched = [];

      for (let i = 0; i < 6; i++) {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php",
        );
        const data = await response.json();
        fetched.push(data.meals[0]);
      }
      setRecipes(fetched);
    };
    fetchRecipes();
  }, []);

  console.log(recipes);

  return (
    <section className="home-images">
      <div className="images-container">
        {recipes.map((recipe, index) => (
          <Link to={`/recipe/${recipe.idMeal}`}
            className="landing-img image"
            key={index}
            style={{
              backgroundImage: `url(${recipe.strMealThumb})`,
              backgroundPosition: "center",
            }}
          >
            <h1 className="name">{recipe.strMeal}</h1>
            <div className="category">
              {recipe.strArea} {recipe.strCategory}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeRecipes;
