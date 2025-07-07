import React from 'react'

const UseEffectHook = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (count < 10) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <>
      <h3>useEffect Hook</h3>
      <p>The useEffect Hook allows you to perform side effects in your function components. It is called after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM or Timers.</p>
      <p>It takes two arguments: a function that contains the side effect code and an optional array of dependencies. The effect will run after the first render and whenever any of the dependencies change.</p>
      <h5>Count: {count}</h5>
      <p>In this example, the count state is incremented every second using a timer set in the useEffect hook. The count will stop after 10 seconds.</p>
    </>
  )
}

export default UseEffectHook