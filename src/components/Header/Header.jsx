import React from "react";
import { Container, ContainerImage } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ContainerImage>
        <div>
          <h1>Açaí 300ml</h1>
          <p>R$12,00</p>
        </div>
        <div>
          <h1>Açaí 700ml</h1>
          <p>R$15,00</p>
        </div>
        <div>
          <h1>Açaí 1L</h1>
          <p>R$18,00</p>
        </div>
      </ContainerImage>
      <h1>Açaí Delivery</h1>
      <p>Monte seu açaí e receba no conforto da sua casa</p>
    </Container>
  );
};

export default Header;
