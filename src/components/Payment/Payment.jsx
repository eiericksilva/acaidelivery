import React from "react";
import Button from "../Button/Button";
import { Container } from "./Payment.styles";

const Payment = () => {
  return (
    <>
      <Container>
        <h2>2. Finalizando a compra</h2>
        <form>
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
              <input type="text" placeholder="Cidade" />
            </label>
            <label>
              <input type="text" placeholder="Bairro" />
            </label>
            <label>
              <input type="text" placeholder="Rua" />
            </label>
            <label>
              <input type="text" placeholder="Ponto de referência" />
            </label>
          </div>
          <Button type="submit" title="Finalizar pedido" />
        </form>
      </Container>
    </>
  );
};

export default Payment;
