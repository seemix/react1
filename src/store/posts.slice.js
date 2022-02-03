import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {postService} from "../services/post.service";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postService.getAll();
            return posts;

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})

const postsReducer = postsSlice.reducer;

export default postsReducer