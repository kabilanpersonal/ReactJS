import React from 'react'

const UseStateHooks = () => {
  const [color, setColor] = React.useState("red");

  const getButtonStyle = (btnColor) => ({
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: color === btnColor ? btnColor : "#eee",
    color: color === btnColor ? "#fff" : "#000",
    marginRight: "10px"
  });

  return (
    <>
      <h3>useState Hook</h3>
      <p>The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.</p>
      <p>It returns an array with two elements: the current state value and a function that updates the state.</p>
      <h5>My favorite color is {color}!</h5>
      <div>
        <button
          type="button"
          style={getButtonStyle("blue")}
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          style={getButtonStyle("red")}
          onClick={() => setColor("red")}
        >Red</button>
      </div>
    </>
  )
}

export default UseStateHooks