import ToDoList from "./ToDoList";
function App() {
  return (
    <div >
      <div className="border shadow p-8 mx-auto max-w  bg-blue-100 min-h-screen flex-col ">
        <h1 className="text-center text-2xl font-bold mt-2 mb-4">ToDo List</h1>
        <ToDoList />
      </div>
      <footer  className="sticky bottom-0 bg-blue-200 text-center text-sm text-gray-800 italic border-t py-4 bg-white">
        Small steps. Big goals.
      </footer>
    </div>
  );
}

export default App;
