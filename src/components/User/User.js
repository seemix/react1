import React from 'react';
import {Link} from "react-router-dom";

import style from './User.module.css';

const User = ({user}) => {

    return (
        <div>
            <div className={style.user_wapper}>
                <div className={style.user_name}>{user.id}. {user.name}</div>
                <div>
                    <Link to={user.id.toString()} state={user}>
                        <button >Details...</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default User;