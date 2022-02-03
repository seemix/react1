import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';

import './App.module.css';
import Cars from "./components/Cars/Cars";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import css from './App.module.css';

const App = () => {

    return (
        <div>
            <div className={css.menu_block}>
                <Link to={'/'}><span className={css.menu}>Cars</span></Link>
                <Link to={'/users'}><span className={css.menu}>Users</span></Link>
                <Link to={'/posts'}><span className={css.menu}>Posts</span></Link>
                <Link to={'/comments'}><span className={css.menu}>Comments</span></Link>
            </div>
            <Routes>
                <Route index element={<Cars/>} path={'/'}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>

            </Routes>
        </div>
    );
};

export default App