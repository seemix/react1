import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

import style from './PostsDetailsPage.module.css';

const PostDetailsPage = () => {

    const {state} = useLocation();
    const {id, userId, title, body} = state;

    return (
        <div>
            <h3>Post Details of {title}</h3>
            <div>
                <p><b>ID: </b> {id}</p>
                <p><b>USER_ID: </b> {userId}</p>
                <p><b>TITLE: </b> {title}</p>
                <p><b>BODY: </b> {body}</p>
                 <Link to={'comments'} state={state}>
                    <button className={style.wide_button}>SHOW COMMENTS OF CURRENT POST</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;