export const reducer = (state, action) => {
    const newPet = {name: action.payload.name};

    if (action.type === 'add') {
        if (action.payload.kind === 'cat')
            return {...state, cats: [...state.cats, {id: new Date().getTime(), ...newPet}]}
        if (action.payload.kind === 'dog')
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), ...newPet}]}
    } else if (action.type === 'delete') {
        if (action.payload.kind === 'cat')
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};

        if (action.payload.kind === 'dog')
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
    } else
        return state;
}