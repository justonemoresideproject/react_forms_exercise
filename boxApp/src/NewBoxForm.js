import React, { useState } from 'react'

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: '#e66465',
        width: 10,
        height: 10
    }
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
        addBox(formData.color, formData.width, formData.height)
        setFormData(INITIAL_STATE)
    }

    return (
    <form onSubmit={handleSubmit}>
        <h3>Create a New Box</h3>
        <label htmlFor='color'>Color</label>
        <input id="color" type="color" name="color" value={formData.color} onChange={handleChange}/>
        <label htmlFor='width'>Width</label>
        <input id='width' type='text' name='width' value={formData.width} onChange={handleChange}/>
        <label htmlFor='length'>length</label>
        <input id='length' type='text' name='length' value={formData.length} onChange={handleChange}/>
    </form>
    )
}

export default NewBoxForm;