import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: authSlicer.reducer
})

export const authActions = authSlicer.actions;

export default store;