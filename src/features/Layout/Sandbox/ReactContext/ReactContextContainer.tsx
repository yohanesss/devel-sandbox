import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { ToggleDarkMode } from "./ToggleDarkMode";

export const ReactContextContainer = () => {
  return (
    <ThemeProvider>
      <ToggleDarkMode />
      <h1>This is Context Demo!</h1>
    </ThemeProvider>
  );
};
