import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const TodosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos'
        }),
        getTodoById: builder.query({
            query: (todoId) => `todos/${todoId}`
        })
    })
});

export const { useGetTodosQuery , useGetTodoByIdQuery} = TodosApi;  // Le pone query porque es un query sino le concatena otra cosa


/*
    Con el RTK Query podmeos crear una especie de api donde le pasamos la base URL y creamos los endpoints para conectarnos a los diferentes servicios,
    ejemplo nos cenectamos a PlaceHolder y creamos un endpoint para obtener los todos
*/