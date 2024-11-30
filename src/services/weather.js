import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Your API Key
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const WeatherApi = createApi({
  reducerPath: "WeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/`,
  }),
  endpoints: (builder) => ({
    getFiveDaysWeatherData: builder.query({
      query: ({ lat, long }) =>
        `data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetFiveDaysWeatherDataQuery } = WeatherApi;
