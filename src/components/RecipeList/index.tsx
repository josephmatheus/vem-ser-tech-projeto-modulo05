import recipesJson from "../../data/recipes.json";
import Recipe from "../../types/Recipe";
import { RecipeCard } from "../RecipeCard";

export const RecipeList = () => {
  const { recipes } = recipesJson
  
  return (
    <ul>
      {recipes.map((recipe: Recipe, index: number) => {
        return <RecipeCard key={index} recipe={recipe} />;
      })}
    </ul>
  )
};
