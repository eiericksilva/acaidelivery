import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Container, Wrapper, ContainerPayment } from "./Menu.styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderDataContext } from "../../Providers/OrderData";
import { size, garnish, additional } from "../../../MockMenu.json";

const Menu = () => {
  /* States */
  const [sum, setSum] = useState(0);
  const [somandoTamanho, setSomandoTamanho] = useState(0);
  const [somandoAcompanhamentos, setSomandoAcompanhamentos] = useState(0);
  const [somandoAdicionais, setSomandoAdicionais] = useState(0);
  const [step, setStep] = useState("stepAcaiSize");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  /*  */
  const { order, setOrder, finalData, setFinalData } =
    useContext(OrderDataContext);

  /* Hooks libs externas */
  const { register, handleSubmit } = useForm({
    mode: "all",
  });

  /* Funções auxiliares */
  const onSubmit = (newOrder) => {
    setOrder(newOrder);

    handleTamanho();
    handleAcompanhamentos();
    handleAdicionais();

    console.log(order);
  };

  const handleTamanho = () => {
    const res = order.Tamanho;
    if (!res) return;

    const nomes = [];
    const numeros = [];

    const [nome, numero] = res.split("|");
    nomes.push(nome);
    numeros.push(parseInt(numero));

    setSomandoTamanho(parseInt(numeros));
  };
  const handleAdicionais = () => {
    const res = order.Adicionais;

    if (!res) return;

    const numeros = [];
    const nomes = [];

    res.map((elemento) => {
      const [nome, numero] = elemento.split("|");
      nomes.push(nome);
      numeros.push(parseInt(numero));
    });

    /*  */
    const valorFinalAdicionais = numeros.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    setSomandoAdicionais(valorFinalAdicionais);
  };
  const handleAcompanhamentos = () => {
    let qtdeAcompanhamentoExtra = 0;

    const qtdeAcompanhamentos = order?.Acompanhamento?.length;
    if (qtdeAcompanhamentos <= 5) {
      qtdeAcompanhamentoExtra = 0;
    } else {
      qtdeAcompanhamentoExtra = qtdeAcompanhamentos - 5;
    }

    setSomandoAcompanhamentos(parseInt(qtdeAcompanhamentoExtra));
  };
  const handleBackStepForm = () => {
    switch (step) {
      case "stepAcaiSize":
        setButtonIsDisabled(true);
        break;

      case "stepGarnish":
        setStep("stepAcaiSize");
        break;

      case "stepAdditional":
        setStep("stepGarnish");
        break;

      case "stepPayment":
        setStep("stepAdditional");
        break;
    }
  };

  const handleNextStepForm = () => {
    switch (step) {
      case "stepAcaiSize":
        setStep("stepGarnish");
        setButtonIsDisabled(false);
        break;

      case "stepGarnish":
        setStep("stepAdditional");
        break;

      case "stepAdditional":
        setStep("stepPayment");
        break;

      case "stepPayment":
        alert("Pedido enviado com sucesso!");
        setStep("stepAcaiSize");
        document.location.reload(true);
        break;
    }
  };

  /* Side Effects */
  useEffect(() => {
    handleTamanho();
    handleAcompanhamentos();
    handleAdicionais();
  }, [order]);

  useEffect(() => {
    const sumValues =
      parseInt(somandoTamanho) +
      parseInt(somandoAcompanhamentos) +
      parseInt(somandoAdicionais);

    setSum(sumValues);
  }, [somandoTamanho, somandoAcompanhamentos, somandoAdicionais]);

  return (
    <>
      <Container>
        {step !== "stepPayment" ? (
          <h2>1. Montando seu açaí</h2>
        ) : (
          <h2>2. Finalizando a compra</h2>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Wrapper>
            {step === "stepAcaiSize" && (
              <div>
                <h3>1.1 Escolha o tamanho do açaí</h3>
                <div className="size">
                  <select {...register("Tamanho")}>
                    {size.map((tamanho) => (
                      <option
                        key={tamanho.id}
                        value={`${tamanho.tamanho}|${tamanho.valor}`}
                      >
                        {tamanho.tamanho} - {`R$:${tamanho.valor},00`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            {step === "stepGarnish" && (
              <Wrapper>
                <div>
                  <h3>1.2 Agora escolha os acompanhamentos</h3>
                  <p>
                    Você pode escolher até 5, cada acompanhamento extra sairá
                    por R$1,00
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
                </div>
              </Wrapper>
            )}
            {step === "stepAdditional" && (
              <Wrapper>
                <h3>1.3 Agora escolha os adicionais</h3>
                <div className="additional">
                  {additional.map((adicional) => (
                    <label key={adicional.id}>
                      <input
                        type="checkbox"
                        name="additional"
                        value={`${adicional.nome}|${adicional.valor}`}
                        {...register("Adicionais")}
                      />
                      {`${adicional.nome} - R$${adicional.valor}`}
                    </label>
                  ))}
                </div>
                <Button type="submit" title="Confirmar escolhas" />
              </Wrapper>
            )}
            {step === "stepPayment" && (
              <ContainerPayment>
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
              </ContainerPayment>
            )}
            <div className="final_value">
              <h2>Valor Final:</h2>
              <p>{`R$: ${sum},00`}</p>
            </div>
            <div className="containerStepButton">
              <Button
                onClick={handleBackStepForm}
                disabled={buttonIsDisabled}
                title="BACK"
              />
              <Button onClick={handleNextStepForm} title="NEXT" />
            </div>
          </Wrapper>
        </form>
      </Container>
    </>
  );
};

export default Menu;
