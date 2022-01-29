import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

import style from './App.module.css';
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";
import CatsForm from "./components/Forms/CatsForm";
import DogsForm from "./components/Forms/DogsForm";

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const deletePet = (kind, id) => {
        dispatch({type: 'delete', payload: {kind, id}})
    }
    const sendFormData = (newPet) => {
        if (newPet.kind && newPet.name) dispatch({type: 'add', payload: {kind: newPet.kind, name: newPet.name}});
    }

    return (
        <div>
            <div className={style.top_wrap}>
                <CatsForm sendFormData={sendFormData}/>
                <DogsForm sendFormData={sendFormData}/>
            </div>
            <div className={style.bottom_wrap}>
                <Cats cats={state.cats} deletePet={deletePet}/>
                <Dogs dogs={state.dogs} deletePet={deletePet}/>
            </div>

        </div>
    )

};

export default App
