import React from 'react';

import {useDispatch} from "react-redux";
import {changeStatus, deleteTask} from "../../store/todoslice";
import './Task.css';

const Task = ({task}) => {
    const dispatch = useDispatch();
    let taskClass = 'task_text';
    if (task.status === true) taskClass = 'completed_task'

    return (
        <div>
            <div className={'task_wrapper'}>
                <div className={taskClass}>{task.task} </div>
                <div className={'checkbox'}>
                    <input type="checkbox" name={'status'} onChange={() => dispatch(changeStatus(task.id))}/>
                </div>
                <div>
                    <button onClick={() => dispatch(deleteTask(task.id))}>delete</button>
                </div>
            </div>
        </div>

    )
};

export default Task;