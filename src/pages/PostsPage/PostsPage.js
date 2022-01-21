import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from "../../services/post.service";
import PostList from "../../components/PostList/PostList";
import style from "./PostsPage.module.css";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, [])
    return (
        <div className={style.posts_wrapper}>
            <div>
                <h3>POSTS</h3>
                {
                    posts.map(post => <PostList key={post.id} post={post}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default PostsPage;