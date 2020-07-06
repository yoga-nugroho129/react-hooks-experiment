import React, { useState } from 'react'

const AddUserForm = ({addUser}) => {
    const [newUser, setNewUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(newUser)
        setNewUser('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                required 
                placeholder="New User" 
                value={newUser} 
                onChange={(e) => setNewUser(e.target.value)} />
            <input 
                type="submit" 
                value="Add" />
        </form>
    )
}

export default AddUserForm
