import React, {useEffect, useState} from 'react';

import User from "../User/User";
import baseUrl from "../../configs/BaseUrl";

const Users = ({selectUser}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(baseUrl+'/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, [])

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