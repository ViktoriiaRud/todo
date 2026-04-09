import { useState } from "react";
import "./App.css";
import type { MyTodo } from "./types/my-todo";

function App() {
	const [todos, setTodos] = useState<MyTodo[]>([]);

	return (
		<>
			<div>ToDo App</div>
		</>
	);
}

export default App;
