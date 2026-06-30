import React, { useState } from "react";
import "./Home.css";
import HomeRecipes from "../../components/HomeRecipes/HomeRecipes";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/results/${ingredient}`);
  }

  return (
    <div id="home">
      <div id="landing" className="row">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>Recipes for every <span className="taste">tastebud</span></h1>
            </div>
            <HomeRecipes />
          </div>
        </header>
        <section>
        <SearchBar 
          subtitle="What are you cooking with?"
          placeholder="Ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onSubmit={handleSearch}/>
        </section>
      </div>
    </div>
  );
};

export default Home;
