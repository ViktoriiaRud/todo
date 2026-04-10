import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import type { Todo } from "./types/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: crypto.randomUUID(),
			text,
			completed: false,
			createdAt: new Date(),
		};

		setTodos((prev) => [...prev, newTodo]);
	};

	return (
		<>
			<div>
				<TodoInput onAdd={addTodo} />
			</div>
		</>
	);
}

export default App;
