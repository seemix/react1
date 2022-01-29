import React from 'react';
import {useForm} from "react-hook-form";

const CatsForm = ({sendFormData}) => {

    const {handleSubmit, register, reset} = useForm();

    const formHandler = (data) => {
        const newPet = {
            kind: 'cat',
            name: data.cat
        }
        sendFormData(newPet);
        reset();
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(formHandler)}>
                    <label>Cat name: <input type="text" {...register('cat')}/>
                        <button>ADD CAT</button>
                    </label>

                </form>
            </div>
        </div>
    );
};

export default CatsForm;