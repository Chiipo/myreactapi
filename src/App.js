import React, { useState } from "react";
import MealList from "./MealList";
import './App.css';


function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500);

  function getMealData() {
    fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=e7ffaa4a756549eb82f0afa0aaa63f1d&timeFrame=day&targetCalories=${calories}`    )
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
          placeholder="Calories"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;