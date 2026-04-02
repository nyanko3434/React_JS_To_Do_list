import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/todos/";

export default function App() {
  const [todos, setTodos]   = useState([]);
  const [title, setTitle]   = useState("");

  // READ
  useEffect(() => { fetchTodos(); }, []);
  const fetchTodos = () => axios.get(API).then(r => setTodos(r.data));

  // CREATE
  const addTodo = () => {
    if (!title.trim()) return;
    axios.post(API, { title, done: false }).then(() => {
      setTitle("");
      fetchTodos();
    });
  };

  // UPDATE (toggle done)
  const toggleTodo = (todo) => {
    axios.patch(`${API}${todo.id}/`, { done: !todo.done }).then(fetchTodos);
  };

  // DELETE
  const deleteTodo = (id) => {
    axios.delete(`${API}${id}/`).then(fetchTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>

      {/* CREATE */}
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
          placeholder="New task..."
        />
        <button style={styles.btn} onClick={addTodo}>Add</button>
      </div>

      {/* READ */}
      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.item}>
            <span
              onClick={() => toggleTodo(todo)}
              style={{ ...styles.title, textDecoration: todo.done ? "line-through" : "none", cursor: "pointer" }}
            >
              {todo.title}
            </span>
            <button style={styles.del} onClick={() => deleteTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { maxWidth: 480, margin: "60px auto", fontFamily: "sans-serif" },
  heading:   { textAlign: "center", marginBottom: 24 },
  inputRow:  { display: "flex", gap: 8, marginBottom: 20 },
  input:     { flex: 1, padding: "8px 12px", fontSize: 15, border: "1px solid #ccc", borderRadius: 6 },
  btn:       { padding: "8px 16px", background: "#333", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" },
  list:      { listStyle: "none", padding: 0 },
  item:      { display: "flex", justifyContent: "space-between", padding: "10px 12px", borderBottom: "1px solid #eee" },
  title:     { fontSize: 15 },
  del:       { background: "none", border: "none", color: "#999", cursor: "pointer", fontSize: 16 },
};