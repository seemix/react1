import React, {useEffect, useState} from 'react';

const Posts = () => {
    let [post, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })
    }, [])
    return (
        <div>
            <h2>Posts</h2>
            <ol>
                {
                    post.map(value => <li key={post.id}>{value.title}</li>)
                }
            </ol>
        </div>
    );
};

export default Posts;