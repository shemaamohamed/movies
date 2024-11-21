import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    movies: []
  };

const MoviesSlice = createSlice({
  name: 'movies', 
  initialState, 
  reducers: {
    setMovies: (state, action) => {
      state.movies= action.payload;
    }


    },


});

export const { setMovies } = MoviesSlice.actions;

export default MoviesSlice.reducer;
