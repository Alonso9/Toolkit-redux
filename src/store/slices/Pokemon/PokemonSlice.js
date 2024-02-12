import { createSlice } from '@reduxjs/toolkit';

export const PokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startPokemonsLoading: (state, /* action */ ) => {
            state.isLoading = true;
        },

        setpokemons: (state, actions) => {
            state.isLoading = false;
            state.page = actions.payload.page;
            state.pokemons = actions.payload.pokemons;
            // console.log(actions)
        }
    }
});


// Action creators are generated for each case reducer function
export const { startPokemonsLoading, setpokemons } = PokemonSlice.actions;

/*
    Los thunks son accions o funciones qeu crean o despachan oras acciones 
    
*/