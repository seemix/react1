import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {albumService} from "../../services/album.service";

const PicturesPage = () => {

    const {state} = useLocation();
    console.log(state);

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getById(state).then(value => setAlbums(value.data))
    }, [state])
    console.log(albums);


    return (
        <div>
            <h3>Albums</h3>

            <Outlet/>
        </div>
    );
};

export default PicturesPage;