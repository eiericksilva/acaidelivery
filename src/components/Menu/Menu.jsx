import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Container, Wrapper, ContainerPayment } from "./Menu.styles";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderDataContext } from "../../Providers/OrderData";
import { size, garnish, additional } from "../../../MockMenu.json";

const Menu = () => {
  const [somandoTamanho, setSomandoTamanho] = useState(0);
  const [somandoAcompanhamentos, setSomandoAcompanhamentos] = useState(0);
  const [somandoAdicionais, setSomandoAdicionais] = useState(0);
  const [sum, setSum] = useState(0);

  /* Step */
  const [step, setStep] = useState("stepAcaiSize");

  /* Payment */
  const [paymentForm, setPaymentForm] = useState("");
  const [adress, setAdress] = useState({
    city: "",
    neighborhood: "",
    street: "",
    number: "",
    referencePoint: "",
  });

  const { order, setOrder } = useContext(OrderDataContext);

  const { register, handleSubmit, reset } = useForm({
    mode: "all",
  });

  const onSubmit = (newOrder) => {
    setOrder(newOrder);

    handleTamanho();
    handleAcompanhamentos();
    handleAdicionais();

    handleOtherInfo();
  };

  const handleOtherInfo = () => {
    if (!order) return;

    const formaDePagamento = order.formaDePagamento;
    const informaçãoAdicional = order.informaçãoAdicional;
    const cidade = order.cidade;
    const bairro = order.bairro;
    const rua = order.rua;
    const numero = order.numero;
    const pontoDeReferencia = order.pontoDeReferencia;

    setPaymentForm(formaDePagamento);
    setAdress({
      city: cidade,
      neighborhood: bairro,
      street: rua,
      number: numero,
      referencePoint: pontoDeReferencia,
    });
  };
  const handleTamanho = () => {
    if (!order) return;

    const res = order.Tamanho;
    if (!res) return;

    const nomes = [];
    const numeros = [];

    const [nome, numero] = res.split("|");
    nomes.push(nome);
    numeros.push(parseInt(numero));

    setSomandoTamanho(numeros[0]);
  };
  const handleAdicionais = () => {
    const res = order.Adicionais || [];

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

    const qtdeAcompanhamentos = order?.Acompanhamento?.length || 0;
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
        break;

      case "stepGarnish":
        setStep("stepAdditional");
        break;

      case "stepAdditional":
        setStep("stepPayment");
        break;

      case "stepPayment":
        alert("Pedido enviado com sucesso!");
        setSum(0);
        reset();
        setStep("stepAcaiSize");
        break;
    }
  };

  useEffect(() => {
    handleTamanho();
    handleAcompanhamentos();
    handleAdicionais();

    console.log(order);
  }, [order]);

  useEffect(() => {
    setSomandoTamanho(0);
    setSomandoAcompanhamentos(0);
    setSomandoAdicionais(0);
  }, []);

  useEffect(() => {
    const sumValues =
      parseInt(somandoTamanho) +
      parseInt(somandoAcompanhamentos) +
      parseInt(somandoAdicionais);

    setSum(sumValues);
    console.log(sumValues);
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
              <Wrapper>
                <div>
                  <h3>1.1 Escolha o tamanho do açaí</h3>
                  <div className="size">
                    <select {...register("Tamanho")}>
                      {size.map((tamanho) => (
                        <option
                          key={tamanho.id}
                          value={`${tamanho.tamanho}|${tamanho.valor}`}
                        >
                          {tamanho.tamanho} - {`R$${tamanho.valor},00`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </Wrapper>
            )}
            {step === "stepGarnish" && (
              <Wrapper>
                <div>
                  <h3>1.2 Agora escolha os acompanhamentos</h3>
                  <small>
                    Você pode escolher até 5, cada acompanhamento extra sairá
                    por R$1,00
                  </small>
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
                        {...register("formaDePagamento")}
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
                        {...register("formaDePagamento")}
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
                        {...register("formaDePagamento")}
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
                        {...register("formaDePagamento")}
                      />
                      Pix
                    </label>
                  </div>
                </div>
                <div className="addInfo">
                  <textarea
                    name="addInfo"
                    placeholder="Deseja informar alguma informação extra? ex.: Preciso de troco para R$50,00"
                    {...register("informaçaoAdicional")}
                  />
                </div>
                <h3>2.2 Qual o endereço da entrega?</h3>
                <div className="address">
                  <label>
                    <input
                      type="text"
                      placeholder="Cidade"
                      name="cidade"
                      {...register("cidade")}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      placeholder="Bairro"
                      name="bairro"
                      {...register("bairro")}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      placeholder="Rua"
                      name="rua"
                      {...register("rua")}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      placeholder="Número"
                      name="numero"
                      {...register("numero")}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      placeholder="Ponto de referência"
                      name="pontoDeReferencia"
                      {...register("pontoDeReferencia")}
                    />
                  </label>
                </div>
              </ContainerPayment>
            )}
            <div className="final_value">
              <h1>Valor Final:</h1>
              <p>{`R$: ${sum},00`}</p>
            </div>
            <div className="containerStepButton">
              <Button onClick={handleBackStepForm}>
                <BsFillArrowLeftCircleFill size={20} />
                VOLTAR
              </Button>
              {step === "stepPayment" ? (
                <Button onClick={handleNextStepForm}>
                  ENVIAR PEDIDO
                  <BsFillArrowRightCircleFill size={20} />
                </Button>
              ) : (
                <Button onClick={handleNextStepForm}>
                  PRÓXIMO
                  <BsFillArrowRightCircleFill size={20} />
                </Button>
              )}
            </div>
          </Wrapper>
        </form>
      </Container>
    </>
  );
};

export default Menu;
