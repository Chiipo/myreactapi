import React, { useState, useEffect } from 'react';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRandomRecipes = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e7ffaa4a756549eb82f0afa0aaa63f1d&number=5`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                const data = await response.json();
                setRecipes(data.recipes);
                setError(null);
            } catch (error) {
                setError('Failed to fetch recipes');
                console.error(error);
            }
        };

     
        fetchRandomRecipes();
    }, []); 

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchButtonClick = async () => {
       
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
            <button onClick={handleSearchButtonClick}>Search</button>
            {error && <p>{error}</p>}
            <div>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
