import { ReactNode } from "react";
import { ReactCalculatorMainContainer } from "../features/Layout/Sandbox/ReactContext/MiscProjects/ReactCalculator/ReactCalculatorMainContainer";
import { TodolistContainer } from "../features/Layout/Sandbox/ReactContext/MiscProjects/TodoList/TodolistContainer";
import { ReactContextContainer } from "../features/Layout/Sandbox/ReactContext/ReactContextContainer";

interface IRoute {
  path: string;
  name: string;
  element: ReactNode;
  protected: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    element: <h1>Text</h1>,
    protected: false,
  },
  {
    path: "/global-state-management/react-context",
    name: "React Context",
    element: <ReactContextContainer />,
    protected: false,
  },
  {
    path: "/projects/react-calculator",
    name: "React Calculator",
    element: <ReactCalculatorMainContainer />,
    protected: false,
  },
  {
    path: "/projects/todo-list",
    name: "Todo List",
    element: <TodolistContainer />,
    protected: false,
  },
];
