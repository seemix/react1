import React from 'react';

import style from './Details.module.css'

const Details = ({user, getUserId}) => {

    const {id, name, username, email, address, phone} = user;

    return (
        <div>
            <h2>{name} user details:</h2>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>username: {username}</div>
            <div>e-mail: {email}</div>
            <div>phone: {phone}</div>
            <div>Address: {address.suite}, {address.street}, {address.city}</div>
            <div>zipcode: {address.zipcode}</div>
            <div><button className={style.details} onClick={() => getUserId(id)}>Show posts</button></div>
        </div>
    );
};

export default Details;