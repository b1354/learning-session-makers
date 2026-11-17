import React from 'react'
import CheckBoxComponent from './CheckBox'

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
                 <h1 className="font-bold mb-2 px-4 py-2">Task</h1>
                {todos.map((todo) => (
                    <CheckBoxComponent
                        key={todo.id}
                        checked={todo.completed}
                        notes={todo.text}
                        name={`todo-${todo.id}`}
                        isTodos={true}
                        className="border-b rounded-none border-gray-200 last:border-none"
                        onChange={(e) => {
                            setTodos((prevTodos) => prevTodos.map((t) => {
                                return t.id === todo.id ? { ...t, completed: e.target.checked } : t
                            }))
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-col px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm m-2">
                <h1 className="font-bold mb-2">Completed</h1>
                {todos.map((todo) => (
                    todo.completed && <p>{todo.text}</p>
                ))}
            </div>
        </div>
    )
}

export default Mapping