import { StyledHeader, StyledLink } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <StyledLink to={"/"}>
          <img src="/recipe-book.png" alt="ReceitApp Logo" width={"40px"} />
          ReceitApp
        </StyledLink>
      </h1>
    </StyledHeader>
  );
};

export default Header;
