import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PATH_FILMS, API_PATH_MAIN, API_TOP_FILMS } from '../../../constans/api';

export const fetchTopFilms = createAsyncThunk(
  'GET_TOP_FILMS',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${API_PATH_MAIN}${API_PATH_FILMS}${API_TOP_FILMS}`, {
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

const topFilmsSlice = createSlice({
  name: 'top_films',
  initialState: {
    films: [],
    status: null,
    error: null
  },
  reducers: {
    serachTopFilmActions(state, action) {
      state.films.films = state.films.films.filter((item) => String(item.nameRu).toLowerCase().replaceAll(' ', '').includes(String(action.payload).toLowerCase().replaceAll(' ', '')));
      console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopFilms.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.films = action.payload;
      })
      .addCase(fetchTopFilms.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  }
})

export const { serachTopFilmActions } = topFilmsSlice.actions;
export default topFilmsSlice.reducer;