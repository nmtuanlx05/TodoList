export default function TodoInput({input , setInput, addTodo}) {
    return (
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
    )
}