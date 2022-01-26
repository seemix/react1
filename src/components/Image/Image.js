import React from 'react';

import style from './Image.module.css';

const Image = ({tag, setTrigger, trigger}) => {

    const width = Math.floor(320 + Math.random() * 10);
    const height = Math.floor(240 + Math.random() * 10);

    return (
        <div className={style.wrap}>
            <div className={style.img_wrap}>
                <img src={`https://loremflickr.com/${width}/${height}/${tag}`} alt={tag} width={'320px'}
                     height={'240px'}/>
            </div>
            <div>
                <button className={style.next_butt} onClick={() => setTrigger(!trigger)}>change image</button>
            </div>

        </div>
    );
};

export default Image;