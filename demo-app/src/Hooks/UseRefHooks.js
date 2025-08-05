import React from "react";

export default function UseRefHook(){
    const [count,setCount] = React.useState(0);
    const countRef = React.useRef(null);

    React.useEffect(()=>{
        countRef.current = count;
    },[count])

    return(
        <>
        <h3>useRef Hook</h3>
        <p>It is used to create a mutable reference- that Persists across re-renders ; Can be used to directly access DOM elements ; Can store mutable values that don't trigger re-renders</p>
        <p>For Example</p>
        <h5>Count: {count}</h5>
        <h5>Previous: {countRef.current}</h5>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}