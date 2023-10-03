import { createSlice } from "@reduxjs/toolkit";

const toggleFavoriteFilmsSlice = createSlice({
  name: 'toggle_favorite',
  initialState: [],
  reducers: {
    addFavoriteFilmActions(state, actions) {
      state = state.push(actions.payload);
    },
    removeFavoriteFilmActions(state, actions) {
      return state = state.filter(item => Number(item.kinopoiskId) !== Number(actions.payload.kinopoiskId));
    },
  }
});

export const { addFavoriteFilmActions, removeFavoriteFilmActions } = toggleFavoriteFilmsSlice.actions;
export default toggleFavoriteFilmsSlice.reducer;