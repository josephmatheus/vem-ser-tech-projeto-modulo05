import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #592507;

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 28px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #A63208;

  &:hover {
    text-decoration: underline;
  }
`;
