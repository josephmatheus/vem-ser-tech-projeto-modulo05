import { Link, useParams } from "react-router-dom";
import recipesJson from "../../data/recipes.json";
import Recipe from "../../types/Recipe";
import { NotFoundPage } from "../NotFoundRecipe";

export const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesJson.recipes.find(
    (recipe: Recipe) => recipe.id === Number(id)
  );

  if (!recipe) return <NotFoundPage />;

  return (
    <>
    <Link to="/">Voltar</Link>
      <div>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <h2>{recipe.title}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Modo de preparo:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};
