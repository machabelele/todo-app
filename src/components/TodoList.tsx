import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  list: { id: number; value: string }[];
  deleteItem: (id: number) => void;
  editItem: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ list, deleteItem, editItem }) => {
  return (
    <ol className="list-none p-0">
      {list.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={() => editItem(index)}
        />
      ))}
    </ol>
  );
};

export default TodoList;
