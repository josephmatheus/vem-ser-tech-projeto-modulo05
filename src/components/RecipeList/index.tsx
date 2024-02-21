import { useState } from "react";
import recipesJson from "../../data/recipes.json";
import Recipe from "../../types/Recipe";
import { RecipeCard } from "../RecipeCard";
import { RecipeListContainer, StyledUl } from "./styled";
import SearchBar from "../SearchBar";


export const RecipeList = () => {
  const { recipes } = recipesJson;
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter(buscar);

  function buscar(recipe: Recipe) {
    return valorAtendeABusca(recipe.title);
  }

  function valorAtendeABusca(valor: string) {
    return valor.toLowerCase().includes(search.toLowerCase());
  }

  return (
    <RecipeListContainer>
      <SearchBar search={search} setSearch={setSearch}/>
      <StyledUl>
        {filteredRecipes.map((recipe: Recipe, index: number) => {
          return <RecipeCard key={index} recipe={recipe} />;
        })}
      </StyledUl>
    </RecipeListContainer>
  );
};
