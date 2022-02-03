import React from 'react';
import css from "../Post/Post.module.css";

const Comment = ({comment}) => {
    return (
        <div className={css.posts_wrapper}>
            <h4>{comment.name}. {comment.email}</h4>
            <p>{comment.body}</p>
            <hr/>
        </div>
    );
};

export default Comment;