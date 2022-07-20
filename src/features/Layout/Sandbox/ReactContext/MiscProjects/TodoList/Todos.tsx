import React from "react";
import { TodoType } from "./TodoInterface";
import { TodoItem } from "./TodoItem";

type TodosProps = {
  todos: TodoType[];
  toggleTodo: (arg: string) => void;
};

export const Todos = ({ todos, toggleTodo }: TodosProps) => {
  return (
    <ul>
      {todos.map((_todo) => (
        <TodoItem key={_todo.id} todo={_todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
