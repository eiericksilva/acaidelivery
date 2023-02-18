import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fce0e4;
  border-radius: 0 0 10% 10%;

  padding: 50px 70px;

  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px;

  .size {
    display: flex;
    flex-direction: column;
  }

  div.final_value {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;
