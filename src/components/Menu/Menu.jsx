import React from "react";
import { Container, Wrapper } from "./Menu.styles";

const Menu = () => {
  console.log();
  return (
    <Container>
      <h2>1. Montando seu açaí</h2>
      <Wrapper>
        <h3>1.1 Escolha o tamanho do açaí</h3>
        <div className="size">
          <label>
            <input type="radio" name="size" value="300ml" />
            300ml - R$12,00
          </label>
          <label>
            <input type="radio" name="size" value="700ml" />
            700ml - R$15,00
          </label>
          <label>
            <input type="radio" name="size" value="1L" />
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
            <input type="checkbox" name="garnish" value="Banana" />
            Banana
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="garnish" value="Leite em Pó" />
            Leite em Pó
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="garnish" value="Granola" />
            Granola
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="garnish" value="Gotas de Chocolate" />
            Gotas de Chocolate
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="garnish" value="Choco-Ball" />
            Choco-Ball
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="garnish"
              value="Cobertura de chocolate"
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
            />
            Cobertura de Morango
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="garnish" value="Mousse de maracujá" />
            Mousse de maracujá
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="garnish" value="Mousse de morango" />
            Mousse de morango
          </label>
        </div>
      </Wrapper>
      <Wrapper>
        <h3>1.3 Agora escolha os adicionais</h3>
        <div className="additional">
          <label>
            <input type="checkbox" name="additional" value="Nutella" />
            Nutella - R$4.00
          </label>
          <label>
            <input type="checkbox" name="additional" value="Oreo" />
            Oreo - R$2.00
          </label>
          <label>
            <input type="checkbox" name="additional" value="Bis" />
            Bis - R$2.00
          </label>
          <label>
            <input type="checkbox" name="additional" value="Kit-Kat" />
            Kit-Kat - R$2.00
          </label>
          <label>
            <input type="checkbox" name="additional" value="Paçoca" />
            Paçoca - R$1.00
          </label>
        </div>
        <div>
          <h2>Valor Final: R$0,00</h2>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Menu;
