import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './slices/filmsSlice/filmsSlice';
import topFilmsSlice from './slices/TopFilmsSlice/topFilmsSlice';
import premierFilmsSlice from './slices/premierFilmsSlice/premierFilmsSlice';
import releasesFilmsSlice from './slices/releasesFilmsSlice/releasesFilmsSlice';

export default configureStore({
  reducer: {
    allFilms: filmsSlice,
    topFilms: topFilmsSlice,
    premierFilms: premierFilmsSlice,
    releasesFilms: releasesFilmsSlice,
  }
})