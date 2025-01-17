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
        },
        updateStart: (state)=>{
            state.loading = true;
        },
        updateUserSuccess:(state, action)=>{
            state.currentUser= action.payload;
            state.loading = false;
            state.error= null;
            // console.log("Reducer updated currentUser:", state.currentUser);
        },
        updateUserFailure:(state, action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        deleteStart: (state)=>{
            state.loading = true;
        },
        deleteUserSuccess:(state, action)=>{
            state.currentUser= null;
            state.loading = false;
            state.error= null;
        },
        deleteUserFailure:(state, action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        signOutStart: (state)=>{
            state.loading = true;
        },
        signOutUserSuccess:(state, action)=>{
            state.currentUser= null;
            state.loading = false;
            state.error= null;
        },
        signOutUserFailure:(state, action)=>{
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { signInStart, signInSuccess, signInFailure, updateStart, updateUserSuccess, updateUserFailure, deleteStart, deleteUserFailure, deleteUserSuccess, signOutStart, signOutUserFailure, signOutUserSuccess} = userSlice.actions;

export default userSlice.reducer;