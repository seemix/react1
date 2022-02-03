import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store/car.slice";
import Car from "../Car/Car";
import style from './Cars.module.css';
import Form from "../Form/Form";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCars())
    }, []);
    return (
        <div>
            <h2>Add / Edit CAR</h2>
            <Form/>

            <div className={style.cars_wrapper}>
                {status === 'pending' && <h2>Loading..</h2>}
                {error && <h2>error</h2>}

                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export default Cars;