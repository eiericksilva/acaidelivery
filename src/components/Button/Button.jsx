import React from "react";
import { BaseButton } from "./Button.styles";

const Button = ({ type, onClick, children }) => {
  return (
    <BaseButton onClick={onClick} type={type}>
      {children}
    </BaseButton>
  );
};

export default Button;
