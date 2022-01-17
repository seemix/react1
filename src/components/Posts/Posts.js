import React, {useEffect, useState} from 'react';

import Post from '../Post/Post';
import style from './Posts.module.css';

const Posts = ({userId}) => {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })
    }, [userId])

    return (
        <div>
            <div className={style.posts_wrapper}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    )
};

export default Posts;