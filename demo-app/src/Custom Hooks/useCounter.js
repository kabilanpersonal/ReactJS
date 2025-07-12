import React from "react";

export default function useCounter(initialValue = 0){
const [value,setValue]= React.useState(initialValue);

const increment = ()=>setValue((prev)=>prev+1)

const decrement = ()=>setValue((prev)=>prev-1)

const reset = ()=>setValue(initialValue)

return {value,increment,decrement,reset}
}