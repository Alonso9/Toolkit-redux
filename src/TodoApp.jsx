import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodoByIdQuery } from './store/apis'

export const TodoApp = () => {
    const [Todo, setTodo] = useState(1)
    // const { data: todos, isLoading} = useGetTodosQuery();
    const { data: todos, isLoading} = useGetTodoByIdQuery(Todo);

    const nextTodo = () => {
        setTodo(Todo + 1)
    }

    const prevTodo = () => {
        if(Todo === 1) { return }
        setTodo(Todo - 1)
    }

  return (
    <>
        <h1>TODOS - RTK Query</h1>
        <hr />

        {isLoading ? 
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            :
            <div>
                <pre>...</pre>
                <pre>{JSON.stringify(todos)}</pre>
                <h1>Page: {Todo}</h1>
                <button onClick={ prevTodo }>Prev TODO</button>
                <button onClick={ nextTodo }>Next TODO</button>
                {/* <ul> 
                    { todos.map( todo => (
                        <li key={todo.id}>
                            {todo.title}
                             - Status: <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>
                        </li>
                    ))}
                </ul> */}
            </div>
        }

    </>
  )
}
