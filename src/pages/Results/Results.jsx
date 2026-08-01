import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
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
                    <div key={index} className="card">
                      <div
                        className="card__title--skeleton"
                        style={{
                          height: "200px",
                          backgroundImage:
                            "url(https://tse2.mm.bing.net/th/id/OIP.03VsueF0bkEMTgH1hwODLAHaE7?pid=ImgDet&w=208&h=138&c=7&dpr=1.3&o=7&rm=3)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="card__area">
                          <p
                            className="card__area--skeleton"
                            style={{
                              width: "40%",
                              height: "20px",
                              background: "white",
                              color: "gray",
                            }}
                          >
                            Loading...
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : userResults.map((_, index) => (
                    <Link
                      to={`/recipe/${userResults[index]?.strMeal}`}
                      key={index}
                      className="recipe__card--link"
                    >
                      <Card
                        key={userResults[index]?.idMeal}
                        meal={userResults[index]?.strMeal}
                        image={userResults[index]?.strMealThumb}
                        area={userResults[index]?.strArea}
                        category={userResults[index]?.strCategory}
                      />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
