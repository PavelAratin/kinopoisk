import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PATH_FILMS, API_PATH_MAIN, API_PREMIERS_FILMS } from '../../../constans/api';


export const fetchPremierFilms = createAsyncThunk(
  'GET_PREMIERS_FILMS',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${API_PATH_MAIN}${API_PATH_FILMS}${API_PREMIERS_FILMS}`, {
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

const premierFilmsSlice = createSlice({
  name: 'premiers_films',
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
      .addCase(fetchPremierFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPremierFilms.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.films = action.payload;
      })
      .addCase(fetchPremierFilms.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  }
})

export const { addFilmActions } = premierFilmsSlice.actions;
export default premierFilmsSlice.reducer;