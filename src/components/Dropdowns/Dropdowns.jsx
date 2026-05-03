import React, { useState } from 'react'
import './Dropdowns.css'

const Dropdowns = (category) => {
  const [selectedOption, setSelectedOption] = useState("DEFAULT");

  function displayCategory(category) {
    setSelectedOption(category)
    console.log(category)
    console.log(selectedOption)
  }

  // const handleChange = (event) => {
  //  setSelectedOption(event.target.value)
  // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(selectedOption);
// }

  return (
    <div className="form__container">
              <div className="drop-down__categories">
                <form >
                  <label for="category">Category:</label>
                  <select id="category" defaultValue="DEFAULT" onChange={(event) => displayCategory(event.target.value)}>
                    <option value="DEFAULT" disabled>--Please choose an option--</option>
                    <option value="BREAKFAST">Breakfast</option>
                    <option value="STARTER">Meal Starters</option>
                    <option value="SIDE">Meal Sides</option>
                    <option value="DESSERT">Desserts</option>
                    <option value="VEGETARIAN">Vegetarian</option>
                    <option value="VEGAN">Vegan</option>
                    <option value="PASTA">Pasta</option>
                    <option value="MISCELLANEOUS">Miscellaneous</option>
                    <option value="" disabled>Protein Options:</option>
                    <option value="SEAFOOD">Seafood</option>
                    <option value="BEEF">Beef</option>
                    <option value="CHICKEN">Chicken</option>
                    <option value="LAMB">Lamb</option>
                    <option value="GOAT">Goat</option>
                    <option value="PORK">Pork</option>
                  </select>
                </form>
              </div>
              <div className="drop-down__area">
                <form>
                  <label htmlFor="area">If Desired:</label>
                  <select id="area" >
                    <option defaultValue="">--Sort Region--</option>
                    <option value="A_TO_Z">arrange A to Z</option>
                    <option value="Z_TO_A">arrange Z to A</option>
                  </select>
                </form>
              </div>
            </div>
  )
}

export default Dropdowns
