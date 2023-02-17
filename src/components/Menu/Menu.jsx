import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Container, Wrapper } from "./Menu.styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderDataContext } from "../../Providers/OrderData";

const Menu = () => {
  const { order, setOrder } = useContext(OrderDataContext);
  useEffect(() => {
    console.log(order);
  }, [order]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setOrder(data);
  };
  return (
    <Container>
      <h2>1. Montando seu açaí</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <h3>1.1 Escolha o tamanho do açaí</h3>
          <div name="size" className="size">
            <label>
              <input
                type="radio"
                name="size"
                value="300ml"
                {...register("Tamanho")}
              />
              300ml - R$12,00
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="700ml"
                {...register("Tamanho")}
              />
              700ml - R$15,00
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="1L"
                {...register("Tamanho")}
              />
              1L - R$18,00
            </label>
          </div>
        </Wrapper>
        <Wrapper>
          <h3>1.2 Agora escolha os acompanhamentos</h3>
          <p>
            Você pode escolher até 5, cada acompanhamento extra sairá por R$1,00
          </p>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Banana"
                {...register("Acompanhamento")}
              />
              Banana
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Leite em Pó"
                {...register("Acompanhamento")}
              />
              Leite em Pó
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Granola"
                {...register("Acompanhamento")}
              />
              Granola
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Gotas de Chocolate"
                {...register("Acompanhamento")}
              />
              Gotas de Chocolate
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Choco-Ball"
                {...register("Acompanhamento")}
              />
              Choco-Ball
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Cobertura de chocolate"
                {...register("Acompanhamento")}
              />
              Cobertura de chocolate
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Cobertura de Morango"
                {...register("Acompanhamento")}
              />
              Cobertura de Morango
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Mousse de maracujá"
                {...register("Acompanhamento")}
              />
              Mousse de maracujá
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="garnish"
                value="Mousse de morango"
                {...register("Acompanhamento")}
              />
              Mousse de morango
            </label>
          </div>
        </Wrapper>
        <Wrapper>
          <h3>1.3 Agora escolha os adicionais</h3>
          <div className="additional">
            <label>
              <input
                type="checkbox"
                name="additional"
                value="Nutella"
                {...register("Adicionais")}
              />
              Nutella - R$4.00
            </label>
            <label>
              <input
                type="checkbox"
                name="additional"
                value="Oreo"
                {...register("Adicionais")}
              />
              Oreo - R$2.00
            </label>
            <label>
              <input
                type="checkbox"
                name="additional"
                value="Bis"
                {...register("Adicionais")}
              />
              Bis - R$2.00
            </label>
            <label>
              <input
                type="checkbox"
                name="additional"
                value="Kit-Kat"
                {...register("Adicionais")}
              />
              Kit-Kat - R$2.00
            </label>
            <label>
              <input
                type="checkbox"
                name="additional"
                value="Paçoca"
                {...register("Adicionais")}
              />
              Paçoca - R$1.00
            </label>
          </div>
          <div className="final_value">
            <h2>Valor Final:</h2>
            <p> R$0,00</p>
          </div>
          <Button type="submit" title="Adicionar Produto" />
        </Wrapper>
      </form>
    </Container>
  );
};

export default Menu;
