import React, { useState } from "react"

const TodoList = () => {
    const INITIAL_STATE = []

    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (todo) => {
        setTodos(todos => [...todos, todo])
    }

    const deleteTodo = () => {
        const { id } = e.target;
        const arr = []
        for(let i = 0; i < todos.length; i++){
            if(i != id){
                arr.push(todos[i])
            }
        }
        setTodos(arr)
    }

    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return (
                        <li><span>{todo.text}</span><span onClick={deleteTodo} id={todos.indexOf(todo)}> | X</span></li>
                    )
                })}
            </ul>
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList;