// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter';
import authSlice from './auth';

// const initialState = {counter: 0, showCounter: false}

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type ==='toggle') {
//         return{
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return {
//         counter: state.counter
//     }
// }

// const store = createStore(counterReducer)

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
