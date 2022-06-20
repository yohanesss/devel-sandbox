import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ToggleDarkMode = () => {
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={toggleDark}>Toggle dark mode</button>
    </>
  );
};
