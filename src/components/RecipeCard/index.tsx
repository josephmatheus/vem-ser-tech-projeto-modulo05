import { Link } from "react-router-dom";
import Recipe from "../../types/Recipe";
import { StyledListItem } from "./styled";

interface Props {
  recipe: Recipe;
}

export const RecipeCard = (props: Props) => {
  const { id, image, title, prepTime, servings } = props.recipe;
  return (
    <StyledListItem>
      <Link to={`/recipe/${id}`}>
        <div className="image-container">
          <img src={image} alt={title} width={300} height={180} />
        </div>
        <div  className="content-container">
          <h2>{title}</h2>
          <p>
            {prepTime} / {servings}
          </p>
        </div>
      </Link>
    </StyledListItem>
  );
};

// Cada card exibe a imagem da receita, título e breve descrição.
