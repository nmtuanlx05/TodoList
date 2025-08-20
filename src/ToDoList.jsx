import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoColumn from "./components/TodoColumn";
export default function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //function add to do
  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        status: "Todo",
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const changeStatus = (id) => {
    setTodos((prev) =>
      prev.map((Todo) => {
        if (Todo.id != id) return Todo;
        if (Todo.status == "Todo") return { ...Todo, status: "Doing" };
        if (Todo.status == "Doing") return { ...Todo, status: "Done" };
        return Todo;
      })
    );
  };

  // function remove todo
  const removeTodo = (idToRemove) => {
    const newTodos = todos.filter((todo) => {
      return todo.id != idToRemove;
    });
    setTodos(newTodos);
  };

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <TodoColumn
          key="Todo"
          status="Todo"
          todos={todos}
          onAdvance={changeStatus}
          onRemove={removeTodo}
        />
        <TodoColumn
          key="Doing"
          status="Doing"
          todos={todos}
          onAdvance={changeStatus}
          onRemove={removeTodo}
        />
        <TodoColumn
          key="Done"
          status="Done"
          todos={todos}
          onAdvance={changeStatus}
          onRemove={removeTodo}
        />
      </div>
    </div>
  );
}
