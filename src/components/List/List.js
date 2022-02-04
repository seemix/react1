import React from 'react';

import {useSelector} from "react-redux";
import Task from "../Task/Task";
import css from './List.module.css';

const List = () => {
    const state = useSelector(state => state['todolist']);
    return (
        <div className={css.list_wrapper}>
            <div>
                {state && state.map(task => <Task key={task.id} task={task}/>)}
            </div>
        </div>
    );
};

export default List;