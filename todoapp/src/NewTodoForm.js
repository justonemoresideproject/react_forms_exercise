import React, { useState } from 'react' 

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = ''

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData.text)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoText">Add Todo</label>
            <input id="todoText" type="text" name="todoText" value={formData.value} onChange={handleChange} />
        </form>
    )
}

export default NewTodoForm;

