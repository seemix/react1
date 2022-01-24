import React, {useState} from 'react';

import css from './Form.css';
const Form = ({filter}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...eventData});
        filter(eventData);
    }
    return (
        <div className={css.wrap}>
            <form>
                <label> Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label> Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label> e-mail: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
            </form>
        </div>
    );
};

export default Form;