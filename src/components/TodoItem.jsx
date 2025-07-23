export default function TodoItem({todo,index,removeTodo}) {
    return (
        <li key={index} className=" bg-blue-100 flex justify-between items-center mt-2 mb-2  border h-9">                          
            <span className="ml-2">{todo}</span>
            <button onClick={() => removeTodo(index)}
                className="bg-red-400 px-1.5 rounded h-full hover:bg-red-500 ">
                Delete
            </button>
        </li>
    )
}