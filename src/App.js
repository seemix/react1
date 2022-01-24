import React, {useEffect, useState} from 'react';

import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";


const App = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers(value)
            setFilteredUsers(value)
        })
    }, []);

    const filter = (data) => {

        let filteredArr = [...users];
        if(data.name) {
            filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if(data.username) {
            filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if(data.email) {
            filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUsers(filteredArr);

    }

    return (
        <div>
            <Form filter={filter}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;