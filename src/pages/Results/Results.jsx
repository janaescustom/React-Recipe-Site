import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDrop from "../../components/Dropdowns/OrderDrop/OrderDrop";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Results.css";

const Results = () => {
  const { listedIngredient } = useParams();
  const [userResults, setUserResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(listedIngredient || "");
  // const [emptyResults, setEmptyResults] = useState(false);

  useEffect(() => {
    async function fetchResults() {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`,
      );
      console.log("Fetched Results:", data.meals);
      const mealsWithImages = data.meals.filter((meal) => meal.strMealThumb);
      setUserResults(mealsWithImages);
      setIsLoading(false);
    }
    fetchResults();
  }, [searchTerm]);

  return (
    <div id="recipes__body" className="container">
      <main id="recipes__main">
        <div className="recipes__container">
          <div className="row">
            <div className="recipes__header">
              <h2 className="recipes__header--title">All Recipes</h2>
              <SearchBar
                id="recipes__searchbar"
                subtitle="Looking for something else?"
                placeholder="Type Ingredient"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <OrderDrop />
            </div>
            <div className="recipes">
              {isLoading
                ? new Array(8).fill(0).map((_, index) => (
                    <div key={index} className="recipe__skeleton">
                      <div className="recipe__skeleton--image">
                        <image
                          url="https://tse2.mm.bing.net/th/id/OIP.03VsueF0bkEMTgH1hwODLAHaE7?pid=ImgDet&w=208&h=138&c=7&dpr=1.3&o=7&rm=3"
                          style={{
                            height: "200px",
                          }}
                        ></image>
                      </div>
                      <div className="recipe__skeleton--text">Loading...</div>
                    </div>
                  ))
                : userResults.map((recipe) => (
                    <div key={recipe.idMeal} className="recipe">
                      <div className="recipe--image">
                        <image url={recipe.strMealThumb} alt={recipe.strMeal} />
                      </div>
                      <div className="recipe--text">
                        <h3>{recipe.strMeal}</h3>
                        <p>{recipe.strArea}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
