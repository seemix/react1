import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props;
    console.log(name);
    return (
        <div className={'comment_wrapper'}>
        <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default Comment;