import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Form.module.css';
import {addTask} from "../../store/todoslice";

const Form = () => {
    const state = useSelector(state => state['todolist']);
    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault();
        if (e.target[0].value) {
            const newTask = {id: new Date().getTime(), task: e.target[0].value, status: false};
            dispatch(addTask(newTask));
        }
    }

    return (
        <div className={css.form_wrapper}>
            <div className={css.cen}>
                <h4>ALL: {state.length} COMPLETED: {state.filter(task => task.status === true).length}</h4>
            </div>
            <div className={css.cen}>
                <form onSubmit={formHandler}>
                    <label>Add new task: <input type="text" placeholder='Add new task...'/></label>
                    <button>ADD TASK!</button>
                </form>
            </div>
        </div>
    );
};

export default Form;