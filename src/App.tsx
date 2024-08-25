import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [list, setList] = useState<{ id: number; value: string }[]>([]);

  const updateInput = (value: string) => setUserInput(value);

  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };

      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const editItem = (index: number) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center text-3xl font-bold mb-4">Todo List</div>
      <TodoInput
        userInput={userInput}
        updateInput={updateInput}
        addItem={addItem}
      />
      <TodoList list={list} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default App;
