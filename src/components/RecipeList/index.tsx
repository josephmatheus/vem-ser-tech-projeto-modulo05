import { useState } from "react";
import recipesJson from "../../data/recipes.json";
import Recipe from "../../types/Recipe";
import { RecipeCard } from "../RecipeCard";
import { Input, RecipeListContainer, StyledUl } from "./styled";
import { IoSearch } from "react-icons/io5";

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
      <div className="search-bar-container">
        <IoSearch color="#592507"  size={24} />
        <Input
          type="text"
          placeholder="Pesquisar receita..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <StyledUl>
        {filteredRecipes.map((recipe: Recipe, index: number) => {
          return <RecipeCard key={index} recipe={recipe} />;
        })}
      </StyledUl>
    </RecipeListContainer>
  );
};
