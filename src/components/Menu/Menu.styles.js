import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fce0e4;
  padding-top: 100px;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15px;

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
  }
`;

export const ContainerPayment = styled.aside`
  width: 100%;
  padding: 10px;

  margin-bottom: 40px;

  .address {
    display: flex;
    flex-direction: column;
    padding: 10px;

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

    @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
    }
  }

  .addInfo {
    textarea {
      width: 100%;
      height: 200px;
      font-size: 1.2rem;
    }
  }
`;
