import { memo } from 'react';

const Todo = ({todos}) => {
    console.debug("Todos:", todos)
  return (
    <>
    <h2>Todos:</h2>
    <ul>
        {todos.map((todo, index) =>{
            return <li key= {index}>{todo}</li>
        })}
    </ul>
    </>
  )
}

export default memo(Todo);