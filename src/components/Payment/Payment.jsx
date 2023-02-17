import React from "react";
import { Container } from "./Payment.styles";

const Payment = () => {
  return (
    <>
      <h2>2. Finalizando a compra</h2>
      <Container>
        <h3>2.1 Informe a forma de pagamento:</h3>
        <div className="payment_form">
          <div>
            <label>
              <input
                type="radio"
                name="payment_form"
                value="Cartão de Crédito"
              />
              Cartão de Crédito
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="payment_form"
                value="Cartão de Débito"
              />
              Cartão de Débito
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="payment_form" value="Dinheiro" />
              Dinheiro
            </label>
          </div>
        </div>
        <h3>2.2 Qual o endereço da entrega?</h3>
        <div className="address">
          <label>
            Cidade:
            <input type="text" />
          </label>
          <label>
            Bairro:
            <input type="text" />
          </label>
          <label>
            Rua:
            <input type="text" />
          </label>
          <label>
            Ponto de referência:
            <input type="text" />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </Container>
    </>
  );
};

export default Payment;
