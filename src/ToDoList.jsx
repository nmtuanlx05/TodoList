import { useState } from "react";

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
            <div className="flex">
                <input
                    className="flex-1 mr-2 border py-1 rounded px-2 "
                    placeholder="Enter a task... "
                    type="text"
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    onKeyDown={(e) => {
                        if(e.key ==="Enter") addTodo()
                    }}
                />
                <button
                    className="bg-blue-400 px-4 rounded hover:bg-blue-500 "
                    onClick={addTodo}>Add
                </button>
            </div>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index} className=" bg-blue-100 flex justify-between items-center mt-2 mb-2  border h-9">
                            
                        <span className="ml-2">{todo}</span>
                        <button onClick={() => removeTodo(index)}
                             className="bg-red-400 px-1.5 rounded h-full hover:bg-red-500 ">
                            Delete
                        </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    

}