import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlaying: null
    },
    reducers: {
        addUpcomingMovies: (state, action) => {
            state.nowPlaying = action.payload;
        }
    }
});

export const {addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;


