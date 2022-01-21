import React from 'react';
import {Outlet, useLocation, Link} from "react-router-dom";

import style from './UserDetailsPage.module.css';

const UserDetailsPage = () => {

    const {state} = useLocation();
    const {id, name, username, address, email, phone, website} = state;
    
    return (
        <div>
            <h3>User Details of {name}</h3>
            <div>
                <p><b>UserName: </b> {username}</p>
                <p><b>e-mail: </b> {email}</p>
                <p><b>phone: </b> {phone}</p>
                <p><b>website: </b> {website}</p>
                <p><b>address: </b> {address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
                <Link to={'posts'} state={state}>
                <button className={style.wider_button}>SHOW POSTS OF CURRENT USER</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;