import React from 'react';
import {useForm} from "react-hook-form";

const DogsForm = ({sendFormData}) => {

    const {handleSubmit, register, reset} = useForm();

    const formHandler = (data) => {
        const newPet = {
            kind: 'dog',
            name: data.dog
        }
        sendFormData(newPet);
        reset();
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(formHandler)}>
                    <label>Dog name: <input type="text" {...register('dog')}/>
                        <button>ADD DOG</button>
                    </label>

                </form>
            </div>
        </div>
    );
};

export default DogsForm;