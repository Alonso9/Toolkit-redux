import { createSlice } from '@reduxjs/toolkit'

// Aqui podemos crear un objeto que sea nuestro valor inicial o directamente
const initialState = {
  value: 0,
}

const initialValue = 5;

export const counterSlice = createSlice({
  name: 'counter',
//   initialState,
initialState: {
    counter: initialValue
},
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1; // accedemos al counter y lo incrementamos
      state.value += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
        // console.log(action)
      state.counter += action.payload 
      // cuando accedemos al payload es al valor que le mandamos el console de action = { "type": "counter/incrementByAmount", "payload": 2}
    },
    resetValue: (state) => {
        state.counter = initialValue
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetValue } = counterSlice.actions

// export default counterSlice.reducer