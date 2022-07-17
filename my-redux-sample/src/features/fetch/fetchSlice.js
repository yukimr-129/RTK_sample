import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = 'https://jsonplaceholder.typicode.com'

export const fetchAsyncUsersJson = createAsyncThunk(
    'json/users',
    async () => {
        const res = await axios.get(`${apiUrl}/users`)

        if (res.status === 200) {
            return res.data
        }else {
            return []
        }
    }
)

export const initialState = {
    users: [],
    error: null,
    loading: false
}

export const fetchSlice = createSlice({
    name: 'fetchSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncUsersJson.pending, (state) => {
            return {
                ...state,
                loading: true,
                error: null
            }
        })
        .addCase(fetchAsyncUsersJson.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        })
        .addCase(fetchAsyncUsersJson.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: 'Fetch Error'
            }
        })
    }
})

export const selectUsers = (state) => state.user.users
export const selectUsersError = (state) => state.user.error
export const selectUsersLoading = (state) => state.user.loading

export default fetchSlice.reducer

