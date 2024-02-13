import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/Counter'
import { PokemonSlice } from './slices/Pokemon'
import { TodosApi } from './apis'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: PokemonSlice.reducer,
    [TodosApi.reducerPath]: TodosApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( TodosApi.middleware )
})