import React from "react";
import { Container } from "./Header.styles";
import { MdDeliveryDining } from "react-icons/md";

const Header = () => {
  return (
    <Container>
      <div className="containerIconAndTitle">
        <MdDeliveryDining size={40} />
        <h1>Açaí Delivery</h1>
      </div>
    </Container>
  );
};

export default Header;
