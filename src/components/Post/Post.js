import React from 'react';

import css from "./Post.module.css";

const Post = ({post}) => {
    return (
        <div className={css.posts_wrapper}>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default Post;