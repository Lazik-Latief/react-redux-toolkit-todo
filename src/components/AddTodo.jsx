// React + useState for local input state
import React, { useState } from "react";

// useDispatch → lets us send actions to Redux store
import { useDispatch } from "react-redux";

// addTodo → action from our todoSlice
import { addTodo } from "../Features/todo/todoSlice";

function AddTodo() {
  // 🔹 Local state to store input typed by user
  const [input, setInput] = useState("");

  // 🔹 Create dispatch function to send actions
  const dispatch = useDispatch();

  // 🔹 Function to handle form submission
  const addTodoHandler = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    // ❗ Stop if input is empty or only spaces
    if (input.trim() === "") return;

    // 🔹 Send addTodo action to Redux with input text
    dispatch(addTodo(input));

    // 🔹 Clear input field after adding todo
    setInput("");
  };

  return (
    // 🔹 Form to add new todo
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* 🔹 Input field controlled by state */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input} // Controlled input value
        onChange={(e) => setInput(e.target.value)} // Update state on typing
      />

      {/* 🔹 Button to submit the form */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

// 🔹 Export component to use in other parts of app
export default AddTodo;
