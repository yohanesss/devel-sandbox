import { ReactNode } from "react";

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
    element: <h1>React Context</h1>,
    protected: false,
  },
];
