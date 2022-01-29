import React from 'react';
import style from '../Cat/Cat.module.css'

const Dog = ({dog, deletePet}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.cat_name}>{dog.name}</div>
            <div>
                <button onClick={()=>deletePet('dog', dog.id)}>delete</button>
            </div>
        </div>

);
};

export default Dog;