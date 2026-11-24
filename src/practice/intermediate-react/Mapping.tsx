import React from 'react'
import ComboBox from './conditional-list-rendering/CheckBox'

interface Todo {
    id: number
    text: string
    completed: boolean
}

const Mapping = ({ todosData }: { todosData: Todo[] }) => {
    const [todos, setTodos] = React.useState<Todo[]>(todosData)

    return (
        <div className="flex flex-col">
            <div className="flex flex-col border border-gray-200 rounded-lg bg-white shadow-sm m-2">
                {todos.map((todo) => (
                    <ComboBox
                        key={todo.id}
                        checked={todo.completed}
                        notes={todo.text}
                        name={`todo-${todo.id}`}
                        className="border-b rounded-none border-gray-200 last:border-none"
                        isTodos={true}
                        onChange={(e) => {
                            setTodos((prevTodos) => prevTodos.map((t) => {
                                return t.id === todo.id ? { ...t, completed: e.target.checked } : t
                            }))
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-4 border px-4 py-4 border-gray-200 rounded-lg bg-white shadow-sm m-2">
                <h1 className="font-bold">Completed</h1>
                <div className="flex flex-col gap-2">
                    {todos.map((todo) => (
                        todo.completed && <p className="text-gray-600 text-sm">{todo.text}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mapping