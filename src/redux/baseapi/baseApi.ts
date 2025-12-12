import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { tagTypesList } from "../tagTypes/tagTypes";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.MUUSM_BACKEND_API_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
