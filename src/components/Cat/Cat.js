import React from 'react';
import style from './Cat.module.css'

const Cat = ({cat, deletePet}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.cat_name}>{cat.name}</div>
            <div><button onClick={()=>deletePet('cat', cat.id)}>delete</button></div>
        </div>
    );
};

export default Cat;