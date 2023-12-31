import { configureStore } from '@reduxjs/toolkit';
import allFilmsSlice from './slices/allFilmsSlice/allFilmsSlice';
import premierFilmsSlice from './slices/premierFilmsSlice/premierFilmsSlice';
import releasesFilmsSlice from './slices/releasesFilmsSlice/releasesFilmsSlice';
import detailFilmSlice from './slices/detailFilmSlice/detailFilmSlice';
import toggleFavoriteFilmsSlice from './slices/toggleFavoteFilmsSlice/toggleFavoriteFilmsSlice';
import topFilmsSlice from './slices/topFilmsSlice/topFilmsSlice';

export default configureStore({
  reducer: {
    allFilms: allFilmsSlice,
    topFilms: topFilmsSlice,
    premierFilms: premierFilmsSlice,
    releasesFilms: releasesFilmsSlice,
    detailFilm: detailFilmSlice,
    favoriteFilms: toggleFavoriteFilmsSlice
  }
})