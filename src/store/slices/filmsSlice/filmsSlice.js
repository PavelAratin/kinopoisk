import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PATH_FILMS, API_PATH_MAIN } from '../../../constans/api';

export const fetchAllFilms = createAsyncThunk(
  'GET_ALL_FILMS',
  async function () {
    try {
      const response = await fetch(`${API_PATH_MAIN}${API_PATH_FILMS}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "5b5541df-cf16-4a80-a315-4df0a301f83a",
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
      return data;
    } catch (error) {

    }
  }
)

const filmsSlice = createSlice({
  name: 'all_films',
  initialState: {
    films: [],
    status: null,
    error: null
  },
  reducers: {
    addFilmActions(state, action) {
      console.log(state);
      console.log(action);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilms.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllFilms.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.films = action.payload;
      })
      .addCase(fetchAllFilms.rejected, (state) => {
        state.status = 'rejected';
      });
  }
})

export const { addFilmActions } = filmsSlice.actions;
export default filmsSlice.reducer;