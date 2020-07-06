import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v1 as uuid } from 'uuid'

import AddUserForm from './AddUserForm'

const UserList = () => {
// #1) USING LOCAL STATE
    // const [users, setUser] = useState([
    //     {name: 'Jhon', id:1},
    //     {name: 'Doe', id:2},
    //     {name: 'Jack', id:3},
    //     {name: 'Smith', id:4}
    // ])

// #2) USING STATE FROM API WITH useEffect
    const [users, setUser] = useState([])

    useEffect(async () => {
        const usersData = await axios('https://jsonplaceholder.typicode.com/users')
        setUser(usersData.data)
    }, [])

    const addUser = (name) => {
        setUser([
            ...users,
            { name: name, id: uuid() }
        ]);
    }

    return (
        <div>
            <h1>UserList</h1>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
            <AddUserForm addUser={addUser} />
        </div>
    )
}

export default UserList