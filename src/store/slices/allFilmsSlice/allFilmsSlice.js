import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PATH_FILMS, API_PATH_MAIN } from '../../../constans/api';

export const fetchAllFilms = createAsyncThunk(
  'GET_ALL_FILMS',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${API_PATH_MAIN}${API_PATH_FILMS}`, {
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

const filmsSlice = createSlice({
  name: 'all_films',
  initialState: {
    films: [],
    status: null,
    error: null
  },
  reducers: {
    serachFilmActions(state, action) {
      state.films.items = state.films.items.filter((item) => String(item.nameRu).toLowerCase().replaceAll(' ', '').includes(String(action.payload).toLowerCase().replaceAll(' ', '')));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllFilms.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.films = action.payload;
      })
      .addCase(fetchAllFilms.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  }
})

export const { serachFilmActions } = filmsSlice.actions;
export default filmsSlice.reducer;