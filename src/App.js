import React, {useState} from 'react';

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import css from './App.module.css';

const App = () => {

    const [trigger, setTrigger] = useState(null);
    const update = (data) => {
        setTrigger(data);
    }
    const [carForUpdate, setCarForUpdate] = useState({});
    return (
        <div className={css.wrapper}>
            <div className={css.wrap}>
                <Cars trigger={trigger} update={setTrigger} setCarForUpdate={setCarForUpdate}/>
            </div>
            <div className={css.wrap}>
                <Form update={update} carForUpdate={carForUpdate}/>
            </div>
        </div>
    );
};
export default App;