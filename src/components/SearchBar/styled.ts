import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 500px;
  height: 50px;
  padding: 12px;
  color: #592507;
  border: 2px solid #592507;
  border-radius: 16px;
  background-color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  outline: none;
  border: none;
  background: none;

  &::-webkit-input-placeholder {
    color: #592507;
  }
`;
