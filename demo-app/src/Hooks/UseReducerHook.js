import React from 'react'

function reducer(state, action) {
    switch (action.type){
        case 'increment':
            return {count: state.count+1}
        case 'decrement':
            return {count: state.count-1}
        case 'reset':
            return {count: 0}
        default:
            return state;
    }
}
const UseReducerHook = () => {
    // useReducer is a React Hook that is used to manage complex state logic in functional components.
    const [state,dispatch] = React.useReducer(reducer, {count: 0});
  return (
    <>
    <h3>useReducer Hook</h3>
    <p>useReducer is a React Hook that is used to manage complex state logic in functional components. It is an alternative to useState and is particularly useful when you have multiple state variables that depend on each other or State has multiple sub-values (like objects or arrays)</p>
    <p>useReducer takes two arguments: a reducer function and an initial state. The reducer function is responsible for updating the state based on the action dispatched. It follows the Redux pattern of having a single source of truth for the state.</p>
    <p>useReducer returns an array with two elements: the current state and a dispatch function. The dispatch function is used to send actions to the reducer function, which will then update the state accordingly.</p>
    <p>Here's a simple example: Count : {state.count}</p>
    <button onClick = {()=>{dispatch({type: 'increment'})}}>Increment</button>
    <button onClick = {()=>{dispatch({type: 'decrement'})}}>Decrement</button>
    <button onClick = {()=>{dispatch({type: 'reset'})}}>Reset</button>
    </>
  )
}

export default UseReducerHook