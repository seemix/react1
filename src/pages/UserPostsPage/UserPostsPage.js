import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const UserPostsPage = () => {
    const {state} = useLocation();

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getByUserId(state.id).then(value => setPosts(value.data))
    }, [])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserPostsPage;