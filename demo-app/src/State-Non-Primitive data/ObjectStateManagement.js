import React from 'react';

const ObjectStateManagement = () => {
    // Object state for profile information
    const [profile, setProfile] = React.useState({ name: '', email: '' });

    // Array state for a list of items
    const [newItem, setNewItem] = React.useState('');
    const [list, setList] = React.useState([]);

    // Function to handle input changes for the profile
    const handleInput = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Function to add a new item to the list
    const addToList = () => {
        setList((prevList) => [...prevList, newItem]);
        setNewItem('');
    };

    return (
        <>
            <h3>Object State Example</h3>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={profile.name}
                onChange={handleInput}
            />
            <br />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleInput}
            />
            <br />
            <p>Current Profile: {JSON.stringify(profile)}</p>
            <br />
            <h3>Array State Example</h3>
            <input type="text" placeholder="New Item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={addToList}>Add to List</button>
            
            
            <ol>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default ObjectStateManagement;