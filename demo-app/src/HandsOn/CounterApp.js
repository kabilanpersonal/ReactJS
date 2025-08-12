//counter function- to increment,decrement,reset
function Counter() {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(prev => prev + 1);
  
    const decrement = () => {
      setCount(prev => (prev > 0 ? prev - 1 : 0)); // prevents going below 0
    }
  
    const reset = () => setCount(0);
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  
  export default Counter;