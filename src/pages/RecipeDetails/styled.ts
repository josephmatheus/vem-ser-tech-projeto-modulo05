import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  color: #592507;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
  }

  h2,
  h3 {
    text-align: center;
  }

  ul,
  ol {
    width: 100%;
    max-width: 550px;
  }

  li {
    padding: 0.5rem 0;
  }
`;
