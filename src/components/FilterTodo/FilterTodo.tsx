import React, { useState } from "react";

type FilterTodoProps = {
  getTodoFilterValue: (filterValue: string) => void;
};

const FilterTodo = ({ getTodoFilterValue }: FilterTodoProps) => {
  const [filterTodoVal, setFilterTodoVal] = useState("all");

// This event handler updates current select option and passes currently selected option value to App component  
const handleFilterTodoChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTodoVal(e.target.value);
    getTodoFilterValue(e.target.value);
  };
  return (
    <select
      onChange={handleFilterTodoChanges}
      value={filterTodoVal}
      className="filter-todo"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default FilterTodo;