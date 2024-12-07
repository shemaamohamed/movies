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
    },
    addMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovies: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    updateMovies: (state, action) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },

  },


});

export const { setMovies } = MoviesSlice.actions;

export default MoviesSlice.reducer;
