import React, {useState} from 'react';

import style from './App.module.css';
import Menu from "./components/Menu/Menu";
import Image from "./components/Image/Image";

const App = () => {
    const [trigger, setTrigger] = useState([]);
    const [tag, setTag] = useState(['cats']);

    const changeTag = (tag) => {
        setTag(tag);
    }

    return (
        <div className={style.wrapper}>
            <Menu changeTag={changeTag}/>
            <Image setTrigger={setTrigger} trigger={trigger} tag={tag}/>
        </div>
    );
};

export default App;
