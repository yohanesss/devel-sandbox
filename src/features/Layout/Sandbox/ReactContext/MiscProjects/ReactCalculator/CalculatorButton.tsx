import React from "react";
import { CalculatorButtonContainer } from "./ReactCalculator.style";

type CalculatorButtonProps = {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType: "equal" | "normal";
};

export const CalculatorButton = ({
  onClick,
  buttonType,
  value,
}: CalculatorButtonProps) => {
  return (
    <CalculatorButtonContainer buttonType={buttonType} onClick={onClick}>
      {value}
    </CalculatorButtonContainer>
  );
};
