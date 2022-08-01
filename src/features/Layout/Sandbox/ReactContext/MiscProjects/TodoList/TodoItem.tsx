import React from "react";
import { TodoType } from "./TodoInterface";

type TodoItemProps = {
  todo: TodoType;
  toggleTodo: (arg: string) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  return (
    <li
      id={todo.id}
      style={todo.completed ? { textDecoration: "line-through" } : {}}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.task}
    </li>
  );
};
