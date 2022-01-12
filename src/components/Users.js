import React, {useEffect, useState} from 'react';

const Users = () => {
    let [user, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <ol>
                {
                    user.map(value => <li key={user.id}>{value.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Users;