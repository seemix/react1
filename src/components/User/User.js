import React from 'react';

import css from './User.module.css';

const User = ({user}) => {
    return (
        <div className={css.user}>
            <p>{user.id}. {user.name}</p>
        </div>
    );
};

export default User;