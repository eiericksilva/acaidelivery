import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Container, Wrapper } from "./Menu.styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderDataContext } from "../../Providers/OrderData";

const Menu = () => {
  const { order, setOrder } = useContext(OrderDataContext);

  const { register, handleSubmit } = useForm({
    mode: "all",
  });

  useEffect(() => {
    console.log("___ORDER___");
    console.log(order);
  }, [order]);

  const onSubmit = (newOrder) => {
    setOrder([...order, newOrder]);
  };

  return (
    <>
      <Container>
        <h2>1. Montando seu açaí</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Wrapper>
            <h3>1.1 Escolha o tamanho do açaí</h3>
            <div className="size">
              <select {...register("Tamanho")}>
                <option value="300ml">300ml</option>
                <option value="700ml">700ml</option>
                <option value="1L">1L</option>
              </select>
            </div>
          </Wrapper>
          <Wrapper>
            <h3>1.2 Agora escolha os acompanhamentos</h3>
            <p>
              Você pode escolher até 5, cada acompanhamento extra sairá por
              R$1,00
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
              <p>0.00</p>
            </div>
            <Button type="submit" title="Adicionar Produto" />
          </Wrapper>
        </form>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCE0E4"
          fill-opacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,224C672,224,768,160,864,133.3C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Menu;
