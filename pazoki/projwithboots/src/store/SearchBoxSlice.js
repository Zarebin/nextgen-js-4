import { createSlice } from "@reduxjs/toolkit";

const initialState = { movieList: [], movie: "", pangeNumber: 1 };

const SearchBoxSlice = createSlice({
  name: "SearchBox",
  initialState,
  reducers: {
    setList(state, action) {
      state.movieList = action.payload;
    },
    showSelectedMovie(state, action) {
      let selectedMovie = action.payload;
      state.movie = state.movieList.filter(
        (item) => item.source.url == selectedMovie
      );
    },
  },
});

export const searchBoxActions = SearchBoxSlice.actions;
export default SearchBoxSlice;
