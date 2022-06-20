import React from "react";
import { ButtonBoxContainer } from "./ReactCalculator.style";

type CalculatorButtonBoxProps = {
  children: React.ReactNode;
};

export const CalculatorButtonBox = ({ children }: CalculatorButtonBoxProps) => {
  return <ButtonBoxContainer>{children}</ButtonBoxContainer>;
};
