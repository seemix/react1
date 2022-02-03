import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            return users;

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})

const usersReducer = usersSlice.reducer;

export default usersReducer