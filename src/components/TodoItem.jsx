export default function TodoItem({ todo, onAdvance, onRemove }) {
  return (
    <div className="bg-blue-100 border shadow rounded px-3 py-2 mb-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {todo.status !== "done" && (
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-500"
            onChange={onAdvance}
          />
        )}
        <span className={todo.status === "done" ? "opacity-50" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={onRemove}
        className="bg-red-400 text-white rounded px-2 py-1 hover:bg-red-500"
      >
        Delete
      </button>
    </div>
  );
}
