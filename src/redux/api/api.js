import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../Features/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: ``,
    // baseUrl: `https://localhost:3333`, // use this during devlopment
  }),
  tagTypes: ["Weather", "Weekly", "User"],

  endpoints: (builder) => ({
    curWeather: builder.query({
      query: (name) => ({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6cfb46eca0d4f9bd7c6518971820b06f`,
      }),
      providesTags: ["Weather"],
    }),

    weeklyForecast: builder.query({
      query: (name) => ({
        url: `http://api.openweathermap.org/data/2.5/forecast?appid=6cfb46eca0d4f9bd7c6518971820b06f&q=${name}&count=7`,
      }),
      providesTags: ["Weekly"],
    }),

    userProfile: builder.query({
      query: () => ({
        url: `${server}/api/v1/user/profile`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),

    addRemoveCities: builder.query({
      query: (city) => ({
        url: `${server}/api/v1/user/updatecities/${city}`,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export default api;

export const {
  useCurWeatherQuery,
  useWeeklyForecastQuery,
  useUserProfileQuery,
  useLazyAddRemoveCitiesQuery,
} = api;
