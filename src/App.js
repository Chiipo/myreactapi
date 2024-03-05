import React, { useState, useEffect } from 'react';
import './index.css';

class GetRandomRecipes200Response {
    constructor({ recipes }) {
        this.recipes = recipes || [];
    }

    static constructFromObject(data) {
        const recipes = data && data.recipes ?
            data.recipes.map(recipeData => new GetRandomRecipes200Response(recipeData)) :
            [];
        return new GetRandomRecipes200Response({ recipes });
    }
}

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            let response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=e7ffaa4a756549eb82f0afa0aaa63f1d');
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            let recipeData = await response.json();
            setData(GetRandomRecipes200Response.constructFromObject(recipeData));
        } catch (error) {
            setError('Could not fetch data');
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!data) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Random Recipe</h1>
            <h2>{data.recipes[0].title}</h2>
            <img src={data.recipes[0].image} alt={data.recipes[0].title} />
            <button onClick={fetchData}>Fetch Again</button>
        </div>
    );
};

export default App;
