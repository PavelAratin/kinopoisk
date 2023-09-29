import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PATH_MAIN, API_RELEASES_FILMS } from '../../../constans/api';;


export const fetchReleasesFilms = createAsyncThunk(
  'GET_RELEASE_FILMS',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${API_PATH_MAIN}${API_RELEASES_FILMS}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "5b5541df-cf16-4a80-a315-4df0a301f83a",
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Сервер ERROR")
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const releasesFilmsSlice = createSlice({
  name: 'releases_films',
  initialState: {
    films: [],
    status: null,
    error: null
  },
  reducers: {
    serachReleasasFilmActions(state, action) {
      state.films.releases = state.films.releases.filter((item) => String(item.nameRu).toLowerCase().replaceAll(' ', '').includes(String(action.payload).toLowerCase().replaceAll(' ', '')));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReleasesFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReleasesFilms.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.films = action.payload;
      })
      .addCase(fetchReleasesFilms.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  }
})

export const { serachReleasasFilmActions } = releasesFilmsSlice.actions;
export default releasesFilmsSlice.reducer;