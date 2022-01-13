import React, {useEffect, useState} from 'react';

import Comment from "./Comment";

const Comments = () => {
    let [comment, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])
    return (
        <div>
            <h2>Comments</h2>
            <hr/>
                {
                    comment.map(value => <Comment key={value.id} name={value.name} email={value.email} body={value.body}/>)
                }
        </div>
    );
};
export default Comments;