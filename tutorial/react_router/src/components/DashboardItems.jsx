import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const DashboardItems = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }),
    [id];
  return (
    <div>
      <h2>User Todos</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
