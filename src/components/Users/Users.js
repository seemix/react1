import React, {useEffect, useState} from 'react';

import User from "../User/User";

const Users = ({selectUser}) => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, [])
   // console.log(typeof (users));
    return (
        <div>
            <h2>Users</h2>
        <div>
                {
                    users.map(value => <User key={value.id} user={value} selectUser={selectUser}/>)
                }
        </div>
        </div>
    );
};

export default Users;