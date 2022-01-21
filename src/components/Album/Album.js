import React from 'react';
import {Link} from 'react-router-dom';

import style from './Album.module.css';

const Album = ({album}) => {
    return (
        <div>
            <Link to={album.id.toString()} state={album.id}>
                <span className={style.album_link}> {album.id}. {album.title}</span>
            </Link>
        </div>
    );
};

export default Album;