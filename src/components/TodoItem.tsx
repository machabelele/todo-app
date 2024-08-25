import React from "react";

interface TodoItemsProps {
  item: { id: number; value: string };
  deleteItem: (id: number) => void;
  editItem: () => void;
}

const TodoItem: React.FC<TodoItemsProps> = ({ item, deleteItem, editItem }) => {
  return (
    <li>
      {item.value}
      <div>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </button>
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={editItem}
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
