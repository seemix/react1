export const reducer = (state, action) => {
    if (action.payload === 1 && action.type === 'inc') return {...state, count1: state.count1 + 1}
    if (action.payload === 1 && action.type === 'dec') return {...state, count1: state.count1 - 1}
    if (action.payload === 1 && action.type === 'reset') return {...state, count1: 0}
    if (action.payload === 2 && action.type === 'inc') return {...state, count2:  state.count2 + 1}
    if (action.payload === 2 && action.type === 'dec') return {...state, count2: state.count2 - 1}
    if (action.payload === 2 && action.type === 'reset') return {...state, count2: 0}

    else return state;
}
