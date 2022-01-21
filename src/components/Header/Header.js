import React from 'react';
import {Link, NavLink} from "react-router-dom";

import style from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={style.header_wrap}>
                <NavLink to={'users'}>USERS</NavLink>
                <NavLink to={'posts'}>POSTS</NavLink>
            </div>
        </div>
    );
};

export default Header;