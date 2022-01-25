import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/CarValidator";

import css from './Form.module.css';

const Form = ({update, carForUpdate: {id, model, price, year}}) => {

    const [formError, setFormError] = useState({});
    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});

    const submit = async (car) => {
        try {
            let newCar;
            if (id) {
                newCar = await carService.updateById(id, car);
                update(newCar);
            } else {
                newCar = await carService.create(car);
                update(newCar);
            }
        } catch (error) {
            setFormError(error.response.data);
        }
    }
    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id])

    return (
        <div>
            <h2>Add new car</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span className={css.error}>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span className={css.error}>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span className={css.error}>{errors.year.message}</span>}
                <div>
                    <button>SAVE TO DATABASE!</button>
                </div>
            </form>
        </div>
    );
};

export default Form;