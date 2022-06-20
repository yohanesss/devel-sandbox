import { title } from "process";
import React, { ReactNode } from "react";
import {
  MainContentContainer,
  MainLayoutContainer,
  SidebarLayoutContainer,
} from "./Layout.styles";
import { SidebarContainer } from "./Sidebar/SidebarContainer";
import { SidebarListingItemContainer } from "./Sidebar/SidebarListingItem/SidebarListingItemContainer";

type LayoutContainerProps = {
  children: ReactNode;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <MainLayoutContainer>
      <SidebarLayoutContainer>
        <SidebarListingItemContainer
          parentLabel={"Global State Management"}
          items={[
            {
              label: "React Context",
              path: "/global-state-management/react-context",
            },
            {
              label: "React Calculator",
              path: "/global-state-management/react-calculator",
            },
          ]}
        />
      </SidebarLayoutContainer>
      <MainContentContainer>{children}</MainContentContainer>
    </MainLayoutContainer>
  );
};
