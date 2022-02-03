import React from 'react';
import css from './Car.module.css';
import {useDispatch} from "react-redux";
import {deleteCarThunk, setCarForUpdate} from "../../store/car.slice";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className={css.car_wrapper}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
                <button className={css.button8} onClick={() => dispatch(setCarForUpdate({id, model, price, year}))}>Edit</button>
                &nbsp;
                <button className={css.button42} onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>

            </div>
        </div>
    );
};

export default Car;