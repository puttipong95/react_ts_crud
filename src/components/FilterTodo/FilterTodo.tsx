import React from "react";

type FilterTodoProps = {
  getTodoFilterValue: (filterValue: string) => void;
};

const FilterTodo = ({ getTodoFilterValue }: FilterTodoProps) => {
  return <div>FilterTodo</div>;
};

export default FilterTodo;