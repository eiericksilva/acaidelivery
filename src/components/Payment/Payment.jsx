import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Container } from "./Payment.styles";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { OrderDataContext } from "../../Providers/OrderData";

const Payment = () => {
  const { order, finalData, setFinalData } = useContext(OrderDataContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (paymentData) => {
    setFinalData(paymentData);
  };

  return (
    <>
      <Container>
        <h2>2. Finalizando a compra</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>2.1 Informe a forma de pagamento:</h3>
          <div className="payment_form">
            <div>
              <label>
                <input
                  type="radio"
                  name="payment_form"
                  value="Cartão de Crédito"
                  {...register("Forma de pagamento")}
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
                  {...register("Forma de pagamento")}
                />
                Cartão de Débito
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="payment_form"
                  value="Dinheiro"
                  {...register("Forma de pagamento")}
                />
                Dinheiro
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="payment_form"
                  value="Pix"
                  {...register("Forma de pagamento")}
                />
                Pix
              </label>
            </div>
          </div>
          <div className="addInfo">
            <textarea
              name="addInfo"
              placeholder="Deseja informar alguma informação extra? ex.: Preciso de troco para R$50,00"
              {...register("Informação Adicional")}
            />
          </div>
          <h3>2.2 Qual o endereço da entrega?</h3>
          <div className="address">
            <label>
              <input
                type="text"
                placeholder="Cidade"
                name="Cidade"
                {...register("Cidade")}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Bairro"
                name="Bairro"
                {...register("Bairro")}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Rua"
                name="Rua"
                {...register("Rua")}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Número"
                name="Rua"
                {...register("Número")}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Ponto de referência"
                name="Ponto de referência"
                {...register("Ponto de referência")}
              />
            </label>
          </div>
          <Button type="submit" title="Finalizar pedido" />
        </form>
      </Container>
    </>
  );
};

export default Payment;
