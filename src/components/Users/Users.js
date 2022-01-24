import React from 'react';

import User from "../User/User";

const Users = ({users}) => {
    return (
        <div>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>

        </div>
    );
};

export default Users;