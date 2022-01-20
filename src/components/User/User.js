import React from 'react';

import style from './User.module.css';

const User = ({user, selectUser}) => {

    const {id, name} = user;

    return (
        <div>
            <div className={style.user_wapper}>
                <div className={style.user_name}>{id}. {name}</div>
                <div>
                    <button onClick={() => selectUser(user)}>Details...</button>
                </div>
            </div>
        </div>
    );
};

export default User;