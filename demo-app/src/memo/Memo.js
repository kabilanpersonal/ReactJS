import {useState} from 'react'
import Todo from './Todo'

const Memo = () => {
    const [count,setCount] = useState(0);
    const [todos] = useState(["Wake up Early","Exercise","Eat healthy","Upgrade Skills","Home","Proper Sleep"]);

    const increment = ()=>{
        setCount((e)=> e+1);
    }


  return (
    <>
    <p>
        Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.
        In this Example, When you click the increment button, the Todos component re-renders. If this component was complex, it could cause performance issues.
    </p>
    <p>To fix this, we can use memo. Use memo to keep the Todos component from needlessly re-rendering. Wrap the Todos component export in memo:</p>
    <Todo todos = {todos}/>
    <div>
        <h3>Count</h3>
        <p>{count}</p>
    </div>
    <button onClick = {increment}>Increment</button>

    <p>Now the Todos component only re-renders when the todos that are passed to it through props are updated.</p>

    </>
  )
}

export default Memo