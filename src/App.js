import React, { useState } from "react";
import MealList from "./MealList";
import "./App.css";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder=" Enter Calories "
          value={calories}
          onChange={handleChange}
        />
        <button onClick={getMealData}>Lets Make A Meal</button>
      </section>
      <div className="calories-display">Current Calories: {calories}</div>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
