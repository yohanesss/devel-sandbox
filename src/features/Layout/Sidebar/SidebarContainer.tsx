import React, { ReactNode } from "react";
import { SidebarMainContainer } from "./Sidebar.style";

type SidebarContainerProps = {
  children: ReactNode;
};

export const SidebarContainer = ({ children }: SidebarContainerProps) => {
  return <SidebarMainContainer>{children}</SidebarMainContainer>;
};
