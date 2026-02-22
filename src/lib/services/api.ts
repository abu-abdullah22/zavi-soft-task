import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => "products",
    }),
    getProduct: builder.query<any, number>({
      query: (id) => `products/${id}`,
    }),
    getCategories: builder.query<any[], void>({
      query: () => "categories",
    }),
    getProductsByCategory: builder.query<any[], number>({
      query: (categoryId) => `products/?categoryId=${categoryId}`,
    }),
  }),
});

export const { 
  useGetProductsQuery, 
  useGetProductQuery, 
  useGetCategoriesQuery, 
  useGetProductsByCategoryQuery 
} = api;
