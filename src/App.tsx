import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import "./App.css";
import { LayoutContainer } from "./features/Layout/LayoutContainer";

function App() {
  return (
    <LayoutContainer>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </LayoutContainer>
  );
}

export default App;
