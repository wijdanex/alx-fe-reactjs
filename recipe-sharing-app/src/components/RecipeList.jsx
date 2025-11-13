import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recipes List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
