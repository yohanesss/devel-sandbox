import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainContentContainer = styled.div`
  flex-grow: 5;
  padding: 2rem;
`;

export const SidebarLayoutContainer = styled.div`
  flex-grow: 1;
  padding: 2rem;
  background-color: #282c34;
  color: white;
`;

type SidebarLayoutListingItemMainContainerProps = {
  isOpened: boolean;
};

export const SidebarLayoutListingItemMainContainer = styled.ul<SidebarLayoutListingItemMainContainerProps>`
  margin: 0;
  padding: 0;

  li {
    padding-bottom: 5px;
    padding-left: 10px;
    list-style: none;
    cursor: pointer;
    width: fit-content;

    &:nth-child(1) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0;

      svg {
        transition: all 0.3s ease-in-out;
        transform: rotate(${(props) => (props.isOpened ? "0" : "180deg")});
      }
    }
  }

  a {
    color: inherit;
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }
`;
