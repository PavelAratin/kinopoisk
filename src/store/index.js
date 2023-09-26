import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './slices/filmsSlice/filmsSlice';

export default configureStore({
  reducer: {
    allFilms: filmsSlice
  }
})