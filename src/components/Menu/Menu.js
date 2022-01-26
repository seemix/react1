import React from 'react';

import style from './Menu.module.css';

const Menu = ({changeTag}) => {
    return (
        <div>
            <div>
                <button className={style.menu_button} onClick={() => changeTag('cats')}>CATS</button>
            </div>
            <div>
                <button className={style.menu_button} onClick={() => changeTag('guitar')}>GUITARS</button>
            </div>
            <div>
                <button className={style.menu_button} onClick={() => changeTag('car')}>CARS</button>
            </div>
            <div>
                <button className={style.menu_button} onClick={() => changeTag('flowers')}>FLOWERS</button>
            </div>
        </div>
    );
};

export default Menu;