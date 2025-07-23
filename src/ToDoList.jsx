import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    //function add to do 
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input])
            setInput("")
        }
    }

    // function remove todo 
    const removeTodo = (indexToRemove) => {
        const newTodos = todos.filter((todo, index) => {
            return index!= indexToRemove
        })
        setTodos(newTodos)
    }
    return (
        <div className="border shadow p-8 mx-auto max-w-md mt-14 bg-blue-200  ">
            <h2 className="text-center mb-4 text-xl font-bold  ">Todo List</h2> 
            <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <TodoItem
                            key={index}
                            todo={todo}
                            index={index}
                            removeTodo={removeTodo}
                        />
                    )
                })}
            </ul>
        </div>
    )
    

}