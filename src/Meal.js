import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e7ffaa4a756549eb82f0afa0aaa63f1d&includeNutrition=false`    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch meal details");
        }
        return response.json();
      })
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching meal details:", error);
      });
  }, [meal.id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}
