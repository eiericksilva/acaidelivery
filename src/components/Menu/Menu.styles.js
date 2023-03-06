import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  min-height: 500px;

  margin: 10px auto;
  padding: 10px;
  border-radius: 15px;
  background-color: #2d033b;

  h2 {
    color: #fce0e4;
  }

  @media (max-width: 930px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 10px auto;
  background-color: pink;
  border-radius: 15px;
  padding: 10px;

  .size {
    display: flex;
    flex-direction: column;
  }

  div.final_value {
    font-size: 1rem;
    font-weight: 100;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 2rem;
      font-weight: 700;
      color: #2d033b;
    }
  }

  .containerStepButton {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 930px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ContainerPayment = styled.aside`
  width: 100%;
  margin-bottom: 40px;

  .address {
    display: flex;
    flex-direction: column;

    label {
      margin: 0.2rem;
    }

    input {
      height: 30px;
      width: 100%;
      padding: 10px;
    }
  }

  div.payment_form {
    width: 100%;
    display: flex;

    div {
      padding: 10px;
    }

    @media (max-width: 1260px) {
      display: flex;
      flex-direction: column;
    }
  }

  .addInfo {
    textarea {
      width: 100%;
      margin: 10px 0;
      height: 200px;
      font-size: 1rem;
    }
  }
`;
