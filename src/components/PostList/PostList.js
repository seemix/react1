import React from 'react';
import {Link} from "react-router-dom";

import style from './PostList.module.css';

const PostList = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div className={style.list_item}>
                {id}. {title} <Link to={post.id.toString()} state={post}><span
                className={style.details_link}>details...</span></Link>
            </div>
        </div>
    );
};

export default PostList;