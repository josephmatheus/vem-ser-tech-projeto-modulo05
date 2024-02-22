import { useParams } from "react-router-dom";
import recipesJson from "../../data/recipes.json";
import Recipe from "../../types/Recipe";
import { NotFoundPage } from "../NotFoundRecipe";
import { useEffect } from "react";
import Header from "../../components/Header";
import { Container } from "./styled";

export const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesJson.recipes.find(
    (recipe: Recipe) => recipe.id === Number(id)
  );

  if (!recipe) return <NotFoundPage />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.title = `ReceitApp | ${recipe.title}`;

    return () => {
      document.title = "ReceitApp | Seu App de Receitas";
    };
  }, [recipe.title]);

  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  );
};
