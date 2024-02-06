import { useDispatch, useSelector } from 'react-redux' 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement, incrementByAmount, resetValue } from './store/slices/Counter'
import { ButtonComponent } from './Components/ButtonComponent'

function App() {
  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch()
  console.log(counter)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{counter}</h2>
      <div className="card">
        {/* <h2> {counter} </h2> */}
        {/* <button onClick={() => dispatch(increment())}>
          +
        </button>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          +2
        </button>
        <button onClick={() => dispatch(resetValue())}>
          Reset 
        </button> */}
        <ButtonComponent classCSS='success' title='+'     fnClick={() => dispatch(increment())} />
        <ButtonComponent classCSS='warning' title='-'     fnClick={() => dispatch(decrement())} />
        <ButtonComponent classCSS='danger'  title='+2'    fnClick={() => dispatch(incrementByAmount(2))} />
        <ButtonComponent classCSS='primary' title='Reset' fnClick={() => dispatch(resetValue())} />
      </div>
    </>
  )
}

export default App
