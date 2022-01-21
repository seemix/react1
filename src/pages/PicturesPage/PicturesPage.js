import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import Album from '../../components/Album/Album';

const PicturesPage = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getAlbums(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div>
            <h3>Albums</h3>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
            <Outlet/>
        </div>
    );
};

export default PicturesPage;