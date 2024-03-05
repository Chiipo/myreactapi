
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

export default GetRandomRecipes200Response;
