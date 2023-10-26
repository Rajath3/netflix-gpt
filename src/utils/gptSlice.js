import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState: {
        viewGpt: false
    },
    reducers: {
        toggleViewGpt: (state, action) => {
            state.viewGpt = !state.viewGpt
        }
    }
})

export const { toggleViewGpt } = gptSlice.actions;

export default gptSlice.reducer;