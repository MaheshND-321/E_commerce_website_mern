import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser:null,
    error:null,
    loading:false,
};

// In userSlice.js
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = typeof action.payload === 'object' 
                ? action.payload.message || 'An error occurred' 
                : action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer;