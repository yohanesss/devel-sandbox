import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarLayoutListingItemMainContainer } from "../../Layout.styles";

type SideBarListingItemDetail = {
  label: string;
  path: string;
};

type SidebarListing = {
  parentLabel?: string;
  items: SideBarListingItemDetail[];
};

export const SidebarListingItemContainer = ({
  parentLabel,
  items,
}: SidebarListing) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <SidebarLayoutListingItemMainContainer isOpened={isOpened}>
      {parentLabel && (
        <li onClick={() => setIsOpened((prevState) => !prevState)}>
          <h3>{parentLabel}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
      )}
      {isOpened &&
        items.map((item) => (
          <li key={item.path + item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
    </SidebarLayoutListingItemMainContainer>
  );
};
