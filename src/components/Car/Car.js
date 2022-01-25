import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car, update, setCarForUpdate}) => {
    const {id, model, price, year} = car;
    const delCar = async () => {
        await carService.deleteById(id);
        update({});
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>Edit car</button>&nbsp;
            <button onClick={()=> delCar()}>Delete car</button>
            <hr/>
        </div>
    );
};

export default Car;