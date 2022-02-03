import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services/car.service";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.createCar(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {

        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteCar(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)
export const patchCarThunk = createAsyncThunk(
    'carSlice/patchCar',
    async ({data}, {dispatch}) => {
        try {
            const updCar = await carService.patchCar(data);
            dispatch(updateCar({data: updCar}))
        } catch (e) {

        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        updateCar: {},
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({...action.payload.data})
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.cars = state.cars.map(car => car.id === action.payload.data.id ? action.payload.data : car)

        },
        setCarForUpdate: (state, action) => {
            state.updateCar = action.payload;
        }

    },

    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, setCarForUpdate, updateCar} = carSlice.actions;

export default carReducer