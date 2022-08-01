import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { TodolistContainer } from "./TodolistContainer";
import { assert } from "console";
import userEvent from "@testing-library/user-event";

describe("Todo Test Suite", () => {
  it("should render empty input when initialize", () => {
    render(<TodolistContainer />);
    expect(screen.getByRole("textbox").innerHTML.length).toBe(0);
  });

  it("should add todo list when input is submitted", () => {
    render(<TodolistContainer />);
    userEvent.type(screen.getByRole("textbox"), "testing input todo{enter}");
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(1);
    expect(items[0].innerHTML).toBe("testing input todo");
  });
});
