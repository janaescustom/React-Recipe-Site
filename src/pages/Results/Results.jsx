import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";
import OrderDrop from "../../components/Dropdowns/OrderDrop/OrderDrop";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Results.css";

const Results = () => {
  const { listedIngredient } = useParams();
  const [results, setResults] = useState([]);
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
      setResults(mealsWithImages);
      setIsLoading(false);
    }
    fetchResults();
  }, [searchTerm]);

  // function onSearch() {
  //   fetchResults(searchTerm);
  // }

  // async function fetchResults(term) {
  //   setIsLoading(true);
  //   setEmptyResults(false);
  //   try {
  //     console.log('Fetched Results:', data.meals);
  //     setResults(data.meals || []);
  //     setTimeout(() => {
  //       if (!data.meals || data.meals.length === 0) {
  //         setEmptyResults(true);
  //       }

  //     }, 500);
  //   } catch (error) {
  //     console.error('Error fetching results:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   fetchResults(searchTerm);
  // });

  return (
    <div id="recipes__body" className="container">
      <main id="recipes__main">
        <section>
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
              <div className="recipes"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Results;
