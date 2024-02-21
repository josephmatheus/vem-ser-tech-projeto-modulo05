import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledListItem = styled.li`
  list-style: none;
  width: 320px;
  height: 320px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .image-container {
    width: 100%;
    height: 60%;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transition: ease-in-out 0.3s;
    }
  }

  .content-container {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 16px 16px 0;

    h3 {
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &:hover {
    .image-container {
      img {
        transform: scale(1.1);
      }
    }
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px outset;
  }
`;

export const StyledLink = styled(Link)`
  color: #a63208;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  text-decoration: none;
`;
