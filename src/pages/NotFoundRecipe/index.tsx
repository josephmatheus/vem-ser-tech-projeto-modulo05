import { Container, StyledLink } from "./styled";

export const NotFoundPage = () => {
  return (
    <Container>
      <h1>404: Oops...</h1>
      <p>A receita que você procura não foi encontrada.</p>
      <StyledLink to="/">Voltar para o inicio</StyledLink>
    </Container>
  );
};