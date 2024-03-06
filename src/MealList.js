import React from "react";
import Meal from "./Meal";


export default function MealList({ mealData }) {

  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros Breakdown</h1>
        <ul>
          <li>Calories: {Math.floor(nutrients.calories)}</li>
          <li>Carbohydrates: {Math.floor(nutrients.carbohydrates)}</li>
          <li>Fat: {Math.floor(nutrients.fat)}</li>
          <li>Protein: {Math.floor(nutrients.protein)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
