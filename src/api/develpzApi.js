import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const develpzApi = createApi({
  reducerPath: "develpzApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    // Example Mutation (POST)
    getExamplePost: builder.mutation({
      query: (requestData) => ({
        url: `example/post?param1=value1&param2=value2`,
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestData,
      }),
    }),

    // Examples Query (GET)
    getExampleGet: builder.query({
      query: () => `example?limit=10`,
    }),
  }),
});
export const { useGetExampleGetQuery, useGetExamplePostMutation } = develpzApi;
