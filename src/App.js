import React, {useState} from 'react';

import style from './App.module.css'
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Details from "./components/Details/Details";

const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const selectUser = (user) => {
        setUser(user);
        setUserId(null);

    }

    const getUserId = (id) => {
        setUserId(id);
    }

    return (
        <div>
            <div className={style.usersWrapper}>
                <Users selectUser={selectUser}/>

                {user && <Details user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;