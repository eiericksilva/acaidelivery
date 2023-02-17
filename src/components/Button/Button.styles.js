import styled from "styled-components";

export const BaseButton = styled.button`
  min-height: 30px;
  min-width: auto;
  width: 20%;

  margin: 10px 0;
  padding: 10px;

  background-color: #f5f500;
  color: #2b061e;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2b061e;
    color: #f5f500;
  }
`;
