import React from "react";
import { BaseButton } from "./Button.styles";

const Button = ({ title, type }) => {
  return <BaseButton type={type}>{title}</BaseButton>;
};

export default Button;
