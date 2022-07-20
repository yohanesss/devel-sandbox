import styled from "styled-components";

export const MainSectionCalculator = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
`;

export const CalculatorBody = styled.div`
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;

export const CalculatorScreenContainer = styled.div`
  display: block;
  white-space: nowrap;
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  font-size: 2em;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

export const ButtonBoxContainer = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;

type CalculatorButtonContainerProps = {
  buttonType: "normal" | "equal";
};

export const CalculatorButtonContainer = styled.button<CalculatorButtonContainerProps>`
  border: none;
  background-color: ${(props) =>
    props.buttonType === "equal" ? "rgb(243, 61, 29)" : "rgb(80, 60, 209)"};
  grid-column: ${(props) =>
    props.buttonType === "equal" ? "3 / 5" : "inherit"};
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  outline: none;

  &:active {
    background-color: ${(props) =>
      props.buttonType === "equal" ? "rgb(228, 39, 15)" : "rgb(61, 43, 184)"};
  }
`;
