import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryDrop.css";

const CategoryDrop = () => {
  const categoryLinks = [
    "Breakfast",
    "Starter",
    "Side",
    "Dessert",
    "Vegetarian",
    "Vegan",
    "Pasta",
    "Miscellaneous",
  ];
  const proteinOptions = [
    "Seafood", 
    "Beef", 
    "Chicken", 
    "Lamb", 
    "Goat", 
    "Pork"];
 
  const [isOpen, setIsOpen] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  function onCategoryClick(clickedOn) {
    console.log("Category clicked", clickedOn);
    setIsOpen(false);
  }

  return (
    <div
      className="category-link__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isOpen
          ? {
              backgroundColor: "#B8C55D",
              boxShadow: "0 1px 12px 4px #d2691ed2",
            }
          : {}
      }
    >
      <div className="category__dropdown nav__btn btn"
      style={
        isOpen
          ? {
              backgroundColor: "#B8C55D",
              boxShadow: "0 1px 12px 4px #d2691ed2",
            }
          : {}
      }
      >Categories</div>
      {isOpen && (
        <div className="category__menu">
          <h3>Pick a Category</h3>
          <div className="category-list">
            {
              categoryLinks.map((category) => (
                <Link
                to={`/categories/${category}`}
                key={category}
                className="category-menu__link"
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
        </div>
        <h3>Or a Protein Option</h3>
        <div className="category-list">
          {proteinOptions.map((protein) => (
              <Link
                to={`/categories/${protein}`}
                key={protein}
                className="category-menu__link"
                onClick={() => onCategoryClick(protein)}
              >
                {protein}
              </Link>
            ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default CategoryDrop;
