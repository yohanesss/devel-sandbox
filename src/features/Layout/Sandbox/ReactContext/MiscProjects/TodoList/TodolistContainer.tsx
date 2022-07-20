import React, { useState } from "react";
import { TodoListMainContainer } from "./Todo.style";
import { TodoInput } from "./TodoInput";
import { TodoType } from "./TodoInterface";
import { Todos } from "./Todos";

export const TodolistContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = ({ task, id, completed, createdAt }: TodoType) =>
    setTodos((oldTodos) => [...oldTodos, { task, id, completed, createdAt }]);

  const toggleTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  return (
    <TodoListMainContainer>
      <TodoInput addTodo={handleAddTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </TodoListMainContainer>
  );
};
