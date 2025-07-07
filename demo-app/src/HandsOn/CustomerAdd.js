import React from 'react'

const CustomerAdd = () => {
    const [input, setInput] = React.useState({id: '', name: ''})
    const [Customers, setCustomers] = React.useState([])
    const addCustomer = () => {
        if (input.name.trim() !== '') {
            setCustomers([...Customers, {name: input.name, id: Date.now()}])
            setInput({id: '', name: ''})
        } else {
            alert('Please enter a valid customer name')
        }
        console.log(Customers)
    }
    const deleteCustomer = (id) => {
        setCustomers(Customers.filter((customer) => customer.id !== id))
    }

  return (
    <>
    <h3>Add Customer</h3>
    <input type='text' value={input.name} onChange = {(e)=> setInput({...input, name: e.target.value})}></input>
    <button onClick={addCustomer}>Add</button>
    <ol>
      {Customers.map((customer) => (
        <li key={customer.id}>
          {customer.name}
          <br></br>
          <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
        </li>
      ))}
    </ol>
    </>
  )
}

export default CustomerAdd