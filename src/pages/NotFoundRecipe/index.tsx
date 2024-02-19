import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404: Página não encontrada</h1>
      <p>A receita que você procura não foi encontrada.</p>
      <Link to="/">Voltar para o inicio</Link>
    </div>
  );
};