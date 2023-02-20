import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #2d033b;
  color: #e5b8f4;

  p {
    font-style: italic;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 300px;
  padding: 20px;

  div {
    width: 200px;
    background-color: yellow;
    border-radius: 15px;
    text-align: center;
    color: #000;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
