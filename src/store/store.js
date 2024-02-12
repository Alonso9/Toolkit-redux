import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/Counter'
import { PokemonSlice } from './slices/Pokemon'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: PokemonSlice.reducer,
  },
})