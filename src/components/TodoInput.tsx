import React from "react";

interface TodoInputProps {
  userInput: string;
  updateInput: (value: string) => void;
  addItem: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({
  userInput,
  updateInput,
  addItem,
}) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Add item.."
        className="p-2 border rounded-1-md focus:outline-none w-full max-w-sm"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        onClick={addItem}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
