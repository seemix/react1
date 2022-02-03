import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/carValidator";

import css from './Form.module.css';
import {useDispatch, useSelector} from "react-redux";
import {createCar, patchCarThunk} from "../../store/car.slice";

const Form = () => {
    const {handleSubmit, register, setValue, reset, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: "onSubmit"
    });
    const {updateCar} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();
    const getForm = (data) => {
        if (updateCar.id) {
            data = {id: updateCar.id, ...data};
            dispatch(patchCarThunk({data}));
            reset();
        } else {
            dispatch(createCar({data}));
            reset();
        }
    }

    useEffect(() => {
        setValue('model', updateCar.model);
        setValue('price', updateCar.price);
        setValue('year', updateCar.year);
    }, [updateCar])

    return (
        <div className={css.form_mg}>
            <form onSubmit={handleSubmit(getForm)}>
                <div className={css.form_wrapper}>
                    <div className={css.form_name}>
                        Model:
                    </div>
                    <div>
                        <input type="text" {...register('model')}/>
                        {errors.model && <span className={css.error}>{errors.model.message}</span>}
                    </div>
                </div>

                <div className={css.form_wrapper}>
                    <div className={css.form_name}>
                        Price:
                    </div>
                    <div>
                        <input type="text" {...register('price')}/>
                        {errors.price && <span className={css.error}>{errors.price.message}</span>}
                    </div>
                </div>
                <div className={css.form_wrapper}>
                    <div className={css.form_name}>
                        Year:
                    </div>
                    <div>
                        <input type="text" {...register('year')}/>
                        {errors.year && <span className={css.error}>{errors.year.message}</span>}
                    </div>
                </div>

                <button className={css.button15}>Send Form</button>
            </form>
        </div>
    );
};

export default Form