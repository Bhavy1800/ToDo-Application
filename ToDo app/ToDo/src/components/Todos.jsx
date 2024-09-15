export function Todos({ todos }) {
  //{todos} = give me all todos = object destructuring
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
        </div>
      ))}
    </div>
  );
}