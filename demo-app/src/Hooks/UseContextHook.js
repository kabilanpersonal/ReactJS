import React from 'react'

const UseContextHook = () => {
  return (
    <>
    <h3>useContext Hook</h3>
    <p>React Context is used to share data globally across your component tree. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
    <p>Instead of sharing props through every level of the component tree, you can create a Context and provide the state at a higher level. Any component that needs access to the state can consume the Context.</p>
    <p>To use Context, you need to create a Context object using React.createContext(). Then, wrap your component tree with a Context.Provider and pass the state as a value.</p>
    <p>Here's a simple example:</p>
    <img src="/useContextExample.png" alt="useContext Example" style={{ width: "100%", height: "auto" }} />
    <p>Any component within the tree can access the state using the useContext Hook. Eg: const user = useContext(UserContext);</p>
    </>
  )
}

export default UseContextHook