import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons,  } from "./store/slices/Pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  // Obtenemos pokemon de redux de la App, mirar el console en redux para referencia
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons) 
  console.log(pokemons)
  console.log(page)
  // console.log(isLoading)

  useEffect(() => {
    dispatch( getPokemons() )  
  }, [])
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <h2>Page: { page }</h2>
        {
          isLoading ?
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :
          <ul>
            {
              pokemons.map(({name}) => (
                <li key={name}>{name}</li>
              ))
            }
          </ul>

        }
        <br />
        <button onClick={() => dispatch( getPokemons(page) )}>Next</button>
    </>
  )
}
