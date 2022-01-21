import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostsCommentsPage from "./pages/PostsCommentsPage/PostsCommentsPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import PicturesPage from "./pages/PicturesPage/PicturesPage";
import PicturePage from "./pages/PicturePage/PicturePage";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'users'} element={<UsersPage/>}>

                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>

                    <Route path={':id/pictures'} element={<PicturesPage/>}>
                        <Route path={':picturesId/'} element={<PicturePage/>}/>
                    </Route>

                </Route>

                <Route path={'posts'} element={<PostsPage/>}>

                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<PostsCommentsPage/>}/>
                    </Route>

                </Route>

            </Route>
        </Routes>
    );
};

export default App;