// createSlice → helps us write Redux logic easily
// nanoid → creates a unique id for each todo
import { createSlice, nanoid } from "@reduxjs/toolkit";

// 🔹 Initial data when app loads
const initialState = {
  todos: [
    { id: 1, text: " hello world" }, // sample todo
  ],
};

// 🔹 Create a Redux slice
export const todoSlice = createSlice({
  // Name of this slice (used in Redux store)
  name: "todo",

  // Initial state for this slice
  initialState,

  // Reducer functions (what actions can do)
  reducers: {
    // 🔹 Add a new todo
    addTodo: (state, action) => {
      // Create new todo object
      const todo = {
        id: nanoid(), // generate unique id
        text: action.payload, // text comes from component
      };

      // Add new todo to todos array
      // Redux Toolkit allows direct mutation
      state.todos.push(todo);
    },

    // 🔹 Remove a todo using its id
    removeTodo: (state, action) => {
      // Keep all todos except the one with matching id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // 🔹 Edit existing todo text
    editTodo: (state, action) => {
      // Get id and updated text from action
      const { id, text } = action.payload;

      // Find the todo that matches the id
      const existingTodo = state.todos.find((todo) => todo.id === id);

      // If todo exists, update its text
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});

// 🔹 Export actions so components can use them
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

// 🔹 Export reducer to add into Redux store
export default todoSlice.reducer;
