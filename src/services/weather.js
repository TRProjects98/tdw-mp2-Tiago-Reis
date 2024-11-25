import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Your API Key
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Coordinates
const LATITUDE = "38.7169"; // Example: Lisbon
const LONGITUDE = "-9.139";

export const WeatherApi = createApi({
  reducerPath: "WeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/`,
  }),
  endpoints: (builder) => ({
    getFiveDaysWeatherData: builder.query({
      query: () =>
        `data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetFiveDaysWeatherDataQuery } = WeatherApi;
