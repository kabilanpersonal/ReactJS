import React from 'react'
import DataFetching from './DataFetching'
import Userlist from './Userlist'

const UserlistWithData = () => {
  const WrappedUserlist = DataFetching(Userlist, 'https://jsonplaceholder.typicode.com/users')
  return (
      <WrappedUserlist />
    
  )
}

export default UserlistWithData