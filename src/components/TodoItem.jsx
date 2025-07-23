export default function TodoItem({ todo, onToggle, onRemove  }) {
    return (
        <li  className={` bg-blue-100 flex justify-between items-center mt-2 mb-2  border h-9  ${ todo.completed ? "opacity-50 " : ""} `}>   
            <input type="checkbox"
                className="w-8 h-4 {} "
                checked={todo.completed}
                onChange={onToggle}
            />    
            <span className="ml-2">{todo.text}</span>
            <button onClick={onRemove}
                className="bg-red-400 px-1.5 rounded h-full hover:bg-red-500 ">
                Delete
            </button>
        </li>
    )
}