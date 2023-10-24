import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        upComingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        nowPlayingMovies: null
    },
    reducers: {
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },

    }
});

export const { addUpcomingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;


