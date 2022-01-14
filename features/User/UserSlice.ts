import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TOKEN } from "../../features/api/config";

interface User {
  data: {
    username: string;
    email: string;
    introduction: string;
    carrerFirst: string;
    carrerSecond: string;
    banner: {
      url: string;
    };
    profile: {
      url: string;
    };
  };
}

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ADDRESS,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getUser: builder.query<User, string | void>({
        query: () => {
          return "/me";
        },
      }),
    };
  },
});

export const { useGetUserQuery } = userApiSlice;
