
class GetRandomRecipes200Response {
  constructor(recipes) {
      this.recipes = recipes;
  }

  static constructFromObject(data) {
      const recipes = data && data.recipes ?
          data.recipes.map(recipeData => GetRandomRecipes200Response.constructFromObject(recipeData)) :
          [];
      return new GetRandomRecipes200Response(recipes);
  }
}

GetRandomRecipes200Response.prototype.recipes = [];

export default GetRandomRecipes200Response;

