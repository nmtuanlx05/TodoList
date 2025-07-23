import { useState , useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
export default function ToDoList() {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos")
        return stored ? JSON.parse(stored) : []
    });
    const [input, setInput] = useState("");
  

    useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos))
    },[todos])

    //function add to do 
    const addTodo = () => {
        if (input.trim()) {
            const newTodo = {
                id: Date.now(),
                text: input.trim(),
                completed: false
            };
            setTodos([...todos, newTodo])
            setInput("")
        }
    }

    const toggleComplete = (id) => {
        setTodos((prev) =>
        prev.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // function remove todo 
    const removeTodo = (idToRemove) => {
        const newTodos = todos.filter((todo) => {
            return todo.id != idToRemove
        })
        setTodos(newTodos)
    }

    

    return (
        <div className="border shadow p-8 mx-auto max-w-md mt-14 bg-blue-200  ">
            <h2 className="text-center mb-4 text-xl font-bold  ">Todo List</h2> 
            <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={() => toggleComplete(todo.id)}
                            onRemove={() => removeTodo(todo.id)}

                        />
                    )
                })}
            </ul>
        </div>
    )
    

}