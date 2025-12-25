// React + useState for local UI state (editing)
import React, { useState } from "react";

// useSelector → read data from Redux
// useDispatch → send actions to Redux
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { removeTodo, editTodo } from "../Features/todo/todoSlice";

function Todos() {
  // 🔹 Get todos array from Redux store
  const todos = useSelector((state) => state.todos);

  // 🔹 Used to send actions (remove, edit) to Redux
  const dispatch = useDispatch();

  // 🔹 Stores which todo is currently being edited
  // null = no todo is being edited
  const [editId, setEditId] = useState(null);

  // 🔹 Stores temporary text while editing
  // This is UI data, not Redux data
  const [editText, setEditText] = useState("");

  return (
    <>
      <div>Todos</div>

      {/* List of todos */}
      <ul className="list-none">
        {/* Loop through each todo */}
        {todos.map((todo) => (
          <li
            key={todo.id} // unique key for React
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {/* If this todo is in edit mode */}
            {editId === todo.id ? (
              // 🔹 Show input box when editing
              <input
                className="bg-zinc-700 text-white px-2 py-1 rounded"
                value={editText} // controlled input
                onChange={(e) => setEditText(e.target.value)} // update editText
              />
            ) : (
              // 🔹 Show normal text when not editing
              <div className="text-white">{todo.text}</div>
            )}

            {/* Buttons container */}
            <div className="flex gap-2">
              {/* If editing → show Save button */}
              {editId === todo.id ? (
                <button
                  onClick={() => {
                    // 🔹 Send updated text to Redux
                    dispatch(editTodo({ id: todo.id, text: editText }));

                    // 🔹 Exit edit mode
                    setEditId(null);
                  }}
                  className="text-white bg-green-500 px-4 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                // 🔹 If not editing → show Edit button
                <button
                  onClick={() => {
                    // 🔹 Enter edit mode for this todo
                    setEditId(todo.id);

                    // 🔹 Put existing text into input
                    setEditText(todo.text);
                  }}
                  className="text-white bg-blue-500 px-4 py-1 rounded"
                >
                  Edit
                </button>
              )}

              {/* 🔹 Delete todo button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
