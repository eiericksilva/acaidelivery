import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Container, Wrapper } from "./Menu.styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderDataContext } from "../../Providers/OrderData";
import { FinalPriceContext } from "../../Providers/FinalPriceContext";

import { size, garnish, additional } from "../../../MockMenu.json";

const Menu = () => {
  const { order, setOrder } = useContext(OrderDataContext);
  const { sum, setSum } = useContext(FinalPriceContext);

  const [somandoTamanho, setSomandoTamanho] = useState("");
  const [somandoAcompanhamentos, setSomandoAcompanhamentos] = useState("");
  const [somandoAdicionais, setSomandoAdicionais] = useState("");

  const { register, handleSubmit } = useForm({
    mode: "all",
  });

  useEffect(() => {
    console.log(order);
  }, [order, sum]);

  useEffect(() => {
    const sum =
      Number(somandoTamanho) +
      Number(somandoAcompanhamentos) +
      Number(somandoAdicionais);

    setSum(sum);
  }, [somandoTamanho, somandoAcompanhamentos, somandoAdicionais]);

  const onSubmit = (newOrder) => {
    setOrder(newOrder);
    handleTamanho();
    handleAcompanhamentos();
    handleAdicionais();
  };

  const handleTamanho = () => {
    setSomandoTamanho(parseInt(order.Tamanho));
  };

  const handleAdicionais = () => {
    const res = order.Adicionais;
    const numberRes = res.map((valor) => parseInt(valor));
    const valorFinalAdicionais = numberRes.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    setSomandoAdicionais(valorFinalAdicionais);
  };

  const handleAcompanhamentos = () => {
    let qtdeAcompanhamentoExtra = 0;
    const qtdeAcompanhamentos = order.Acompanhamento.length;
    if (qtdeAcompanhamentos <= 5) {
      qtdeAcompanhamentoExtra = 0;
    } else {
      qtdeAcompanhamentoExtra = qtdeAcompanhamentos - 5;
    }

    setSomandoAcompanhamentos(qtdeAcompanhamentoExtra);
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
                {size.map((tamanho) => (
                  <option key={tamanho.id} value={tamanho.valor}>
                    {tamanho.tamanho}
                  </option>
                ))}
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
              {garnish.map((acompanhamento) => (
                <label key={acompanhamento.id}>
                  <input
                    type="checkbox"
                    name="garnish"
                    value={acompanhamento.nome}
                    {...register("Acompanhamento")}
                  />
                  {acompanhamento.nome}
                </label>
              ))}
            </div>
          </Wrapper>
          <Wrapper>
            <h3>1.3 Agora escolha os adicionais</h3>
            <div className="additional">
              {additional.map((adicional) => (
                <label key={adicional.id}>
                  <input
                    type="checkbox"
                    name="additional"
                    value={adicional.valor}
                    {...register("Adicionais")}
                  />
                  {`${adicional.nome} - R$${adicional.valor}`}
                </label>
              ))}
            </div>
            <div className="final_value">
              <h2>Valor Final:</h2>
              <p>{`R$${sum},00`}</p>
            </div>
            <Button type="submit" title="Adicionar Produto" />
          </Wrapper>
        </form>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCE0E4"
          fillOpacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,224C672,224,768,160,864,133.3C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Menu;
