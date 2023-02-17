import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  padding: 15px;

  padding: 50px 70px;

  margin-bottom: 40px;

  form {
    display: flex;
    flex-direction: column;
  }
  .address {
    display: flex;
    flex-direction: column;
    padding: 10px;

    label {
      margin: 0.2rem;
    }

    input {
      height: 30px;
      width: 70%;
      padding: 10px;
    }
  }

  div.payment_form {
    width: 100%;
    display: flex;

    div {
      padding: 10px;
    }
  }
`;
