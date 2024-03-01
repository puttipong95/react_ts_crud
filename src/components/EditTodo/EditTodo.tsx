import React from "react";
import { TodoInterface } from "../../App";

type EditTodoProps = {
  editTodo: TodoInterface;
  setEditTodo: (editTodo: TodoInterface) => void;
};

const EditTodo = ({ editTodo, setEditTodo }: EditTodoProps) => {
  return <div>EditTodo</div>;
};

export default EditTodo;