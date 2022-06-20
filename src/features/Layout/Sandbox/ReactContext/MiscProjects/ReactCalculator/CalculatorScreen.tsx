import React from "react";
import { CalculatorScreenContainer } from "./ReactCalculator.style";

type CalculatorScreenProps = {
  value: string;
};

export const CalculatorScreen = ({ value }: CalculatorScreenProps) => {
  return <CalculatorScreenContainer>{value}</CalculatorScreenContainer>;
};
