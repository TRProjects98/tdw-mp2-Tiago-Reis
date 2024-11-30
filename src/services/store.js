import { configureStore, createSlice } from "@reduxjs/toolkit";
import { WeatherApi } from "./weather";

const WeatherStatus = createSlice({
  name: "Weather",
  initialState: {
    Location: "Aveiro - Portugal",
    WeatherData: null,
    showBanner: false,
    lat: 40.6412,
    long: -8.65362,
  },

  reducers: {
    Add_Location: (state, action) => {
      state.Location = action.payload;
    },
    Add_Data: (state, action) => {
      state.WeatherData = action.payload;
    },
    Add_Coordinates: (state, action) => {
      state.lat = action.payload.lat;
      state.long = action.payload.lng;
    },
    ToogleBanner: (state) => {
      state.showBanner = !state.showBanner;
    },
  },
});

export const { Add_Data, Add_Coordinates, ToogleBanner, Add_Location } =
  WeatherStatus.actions;

const store = configureStore({
  reducer: {
    weather: WeatherStatus.reducer,
    //API Call
    [WeatherApi.reducerPath]: WeatherApi.reducer,
  },
  //API middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(WeatherApi.middleware),
});

export default store;
