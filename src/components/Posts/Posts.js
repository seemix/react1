import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/posts.slice";
import Post from "../Post/Post";

const Posts = () => {
    const {posts, status, error} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

    return (
        <div>
            {status === 'pending' && <h2>Loading..</h2>}
            {error && <h2>error</h2>}
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;