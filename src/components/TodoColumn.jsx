import TodoItem from "./TodoItem";

export default function TodoColumn({status, todos, onAdvance, onRemove}) {
    return (
        <div className="w-full md:w-1/3 p-2 bg-blue-200 ">
            <h3 className="text-center">{status}</h3>
            {todos
                .filter((todo) => todo.status === status)
                .map((todos) => (
                    <TodoItem
                        key={todos.id}
                        todo={todos}
                        onAdvance={() => onAdvance(todos.id)}
                        onRemove={() => onRemove(todos.id)}
                    />
                ))}
        </div>
    )
}