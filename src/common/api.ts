import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookType, BooksResponseType } from "./types";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

export const getBooksQuery = createApi({
  reducerPath: "getBooks",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponseType, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/book/?${params.toString()}`;
      },
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getBookByIdQuery = createApi({
  reducerPath: "getBookById",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getBookById: builder.query<BookType, number>({
      query: (id) => `/book/${id}`,
    }),
  }),
});

export const { useGetBookByIdQuery } = getBookByIdQuery;
export const { useGetBooksQuery } = getBooksQuery;
