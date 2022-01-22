import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import style from './UsersPage.module.css';
import {userService} from "../../services/user.service";
import User from "../../components/User/User";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={style.users_wrapper}>
            <div>
            <h3>Users</h3>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};