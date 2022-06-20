import React, { useState } from "react";
import { CalculatorButton } from "./CalculatorButton";
import { CalculatorButtonBox } from "./CalculatorButtonBox";
import { CalculatorScreen } from "./CalculatorScreen";
import { CalculatorBody, MainSectionCalculator } from "./ReactCalculator.style";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export const ReactCalculatorMainContainer = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: "0",
    res: "0",
  });

  const numClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === "0" && value === "0"
            ? "0"
            : +calc.num % 1 === 0
            ? calc.num + value
            : calc.num + value,
        res: !calc.sign ? "0" : calc.res,
      });
    }
  };

  const commaClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: "0",
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : "" + math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: "0",
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? "" + Number(calc.num) * -1 : "0",
      res: calc.res ? "" + Number(calc.res) * -1 : "0",
      sign: "",
    });
  };

  const percentClickHandler = () => {
    console.log("[calc]", calc);
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;

    setCalc({
      ...calc,
      num: "" + (num /= Math.pow(100, 1)),
      res: "" + (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: "0",
      res: "0",
    });
  };

  const toLocaleString = (num: string) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num: any) => num.toString().replace(/\s/g, "");

  // React.MouseEventHandler<HTMLButtonElement>
  return (
    <MainSectionCalculator>
      <CalculatorBody>
        <CalculatorScreen value={calc.num ? "" + calc.num : "" + calc.res} />
        <CalculatorButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <CalculatorButton
                key={i}
                buttonType={btn === "=" ? "equal" : "normal"}
                value={"" + btn}
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            );
          })}
        </CalculatorButtonBox>
      </CalculatorBody>
    </MainSectionCalculator>
  );
};
