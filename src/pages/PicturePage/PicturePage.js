import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import style from './PicturePage.module.css';
import Picture from '../../components/Picture/Picture';

const PicturePage = () => {

    const albumId = useParams();
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        albumService.getById(albumId.picturesId).then(value => setAlbum(value))
    }, [albumId.picturesId])

    return (
        <div className={style.pic_wrapper}>
            {
                album.map(img => <Picture key={img.id} img={img}/>)
            }
        </div>
    );
};

export {PicturePage};