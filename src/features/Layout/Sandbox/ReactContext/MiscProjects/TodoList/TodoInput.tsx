import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "./TodoInterface";

type TodoInputProps = {
  addTodo: ({ task, id, completed, createdAt }: TodoType) => void;
};

export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuidv4();
    addTodo({ id, task: userInput, completed: false, createdAt: Date.now() });
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-input"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
    </form>
  );
};
