import React, {useReducer} from 'react';
import {reducer} from "../reducer";
import style from './Counters.module.css';

const Counters = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0});
    return (
        <div className={style.wrap}>
             <div>
                <h2>Counter1</h2>
                <div>{state.count1}</div>
                <button onClick={() => {
                    dispatch({type: 'inc', payload: 1})
                }
                }>INC
                </button>&nbsp;
                <button onClick={() => {
                    dispatch({type: 'dec', payload: 1})
                }}>DEC
                </button>&nbsp;
                <button onClick={() => {
                    dispatch({type: 'reset', payload: 1})
                }}>RESET
                </button>
            </div>

            <div>
                <h2>Counter2</h2>
                <div>{state.count2}</div>
                <button onClick={() => {
                    dispatch({type: 'inc', payload: 2})
                }}>INC
                </button>&nbsp;
                <button onClick={() => {
                    dispatch({type: 'dec', payload: 2})
                }}>DEC
                </button>&nbsp;
                <button onClick={() => {
                    dispatch({type: 'reset', payload: 2})
                }}>RESET
                </button>
            </div>

        </div>
    );
};

export default Counters;