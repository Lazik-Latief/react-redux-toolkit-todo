import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* 🔹 App Title */}
      <h1 className="text-4xl font-bold mb-8 text-indigo-400">
        Redux Toolkit Todo App
      </h1>

      {/* 🔹 Add Todo Component */}
      <div className="w-full max-w-md bg-zinc-800 p-6 rounded-lg shadow-lg mb-6">
        <AddTodo />
      </div>

      {/* 🔹 Todos List Component */}
      <div className="w-full max-w-md bg-zinc-800 p-6 rounded-lg shadow-lg">
        <Todos />
      </div>

      {/* 🔹 Footer / Info */}
      <p className="mt-6 text-gray-400 text-sm">
        Learn Redux Toolkit with simple Todo app
      </p>
    </div>
  );
}

export default App;
