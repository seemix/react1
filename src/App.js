import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import {
    UsersPage,
    UserDetailsPage,
    UserPostsPage,
    PicturesPage,
    PicturePage,
    PostsPage,
    PostDetailsPage,
    PostsCommentsPage
}
from "./pages/index";

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