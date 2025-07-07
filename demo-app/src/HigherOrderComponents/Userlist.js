import React from 'react'

const Userlist = ({ data, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
    if (!data || data.length === 0) return <div>No users found.</div>;
  return (
    <>
    <h2>Userlist</h2>
    <ul>
      {data.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
    </>
    

  )
}

export default Userlist