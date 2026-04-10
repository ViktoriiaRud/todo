import React, { useState } from "react";

interface TodoInputProps {
	onAdd: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (value.trim()) {
			onAdd(value.trim());
			setValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Add a new task..."
				className="flex-1 px-4 py-2 border-2 border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-200 transition-all font-medium"
			/>
			<button type="submit" className="px-5 py-2 bg-cyan-300 text-black font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
				Add Task
			</button>
		</form>
	);
};
