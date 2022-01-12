import React, {useEffect, useState} from 'react';

const Comments = () => {
    let [comment, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            })
    }, [])
    return (
        <div>
            <h2>Comments</h2>
            <ol>
                {
                    comment.map(value => <li key={comment.id}>{value.body}</li>)
                }
            </ol>
        </div>
    );
};

export default Comments;