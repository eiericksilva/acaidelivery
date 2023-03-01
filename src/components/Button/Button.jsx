import React from "react";
import { BaseButton } from "./Button.styles";

const Button = ({ title, type, onClick }) => {
  return (
    <BaseButton onClick={onClick} type={type}>
      {title}
    </BaseButton>
  );
};

export default Button;
