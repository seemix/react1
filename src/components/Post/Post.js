import React from 'react';

import style from './Post.module.css';

const Post = ({post}) => {
    console.log(typeof (post));
    const {id, userId, title, body} = post;
    return (
        <div>
            <div className={style.post_wrapper}>
                <div>ID: {post.id}</div>
                <div>USER_ID: {userId}</div>
                <div><h4>Title: {post.title}</h4></div>
                <div>Body: <i>{post.body}</i></div>
            </div>
        </div>
    );
};

export default Post;