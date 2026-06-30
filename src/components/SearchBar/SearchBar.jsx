import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { Link, useNavigate } from "react-router-dom";

function SearchBar({  id, subtitle, placeholder, ingredient, onSubmit }) {
  const [query, setQuery] = useState("");
  const [inputResults, setInputResults] = useState([]);
  const [isHovering, setIsHovering] = useState(null);
  const navigate = useNavigate();

  // const history = useHistory();

  // function handleSubmit(e) {
  //   // e.preventDefault();
  //   console.log('Submit was handled for', query);
  //   if (query.trim()) {
  //     // history.push(`/results?ingredient=${query}`);
  //     navigate(`/results/${query}`);
  //   }
  //   onSubmit(query);
  // }
  function handleSearch(pickedIngredient) {
    console.log('Clicked ingredient:', pickedIngredient);
    navigate(`/results/${pickedIngredient}`);
    setQuery(pickedIngredient);
  }

  useEffect(() => {
    if (query.trim() === "") {
      setInputResults([]);
      return;
    }
    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/list.php?i=list`,
        );
        const data = await response.json();
        const filteredResults = data.meals.filter((search) =>
          search.strIngredient.toLowerCase().includes(query.toLowerCase()),
        );
        console.log("Filtered Input:", filteredResults);
        setInputResults(filteredResults);
        // console.log("Updated:", inputResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="search__container" id={id}>
      <form 
      onSubmit={() => handleSearch(query)}
      >
        <label htmlFor="ingredient__input">
          <h2 className="subtitle">{subtitle}</h2>
        </label>
        <div id="searchbar__container">
          <input
            id="ingredient__input"
            type="search"
            value={query}
            placeholder={placeholder}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="submit"
            id="ingredient__lookup"
            value="Let's Cook Something Up"
            onClick={() => handleSearch(query)}
          />
        </div>
      </form>
      {query.trim() !== "" && inputResults.length > 0 && (
        <div id="results">
        <ul>
        {inputResults.length > 0 &&
          inputResults.map((item) => {
            const listedIngredient = item.strIngredient.toLowerCase();
            return (
              <Link to={`results/${listedIngredient}`} key={listedIngredient} className="result-item"
              >
               <li onMouseEnter={() => setIsHovering(listedIngredient)}
              onMouseLeave={() => setIsHovering(null)}
            style={{ backgroundColor: isHovering === listedIngredient ? '#186433' : 'transparent' }}
            onClick={() => handleSearch(listedIngredient)}> {item.strIngredient} </li>
            </Link>
            );
})}
          </ul>
      </div>
      )}
    </div>
  );
}

export default SearchBar;
