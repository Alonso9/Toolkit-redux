import { PokemonApi } from "../../../Api/PokemonApi"
import { setpokemons, startPokemonsLoading } from "./PokemonSlice"

export const getPokemons = (page = 0) => {
    return async( dispatch, getState ) => {
        dispatch( startPokemonsLoading() )
        //URL https://pokeapi.co/api/v2/pokemon?limit=10&offset=0

        // const resp = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }` )
        // const data = await resp.json();

        const {data}  = await PokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)

        // console.log(data);
        setTimeout(() => {
            dispatch( setpokemons({
                pokemons: data.results,
                page: page + 1,
            }) )
        }, 800);

    }
}

// Es una funcion que regresa una tarea asincrona 