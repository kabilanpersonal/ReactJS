import { useState } from 'react';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Values :",inputs)
        alert(inputs.username +" "+ inputs.age);
    }

    return (
        <div>
            <h2>Sample Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username}
                        onChange={handleChange}
                    />
                </label>

                <label>Enter your Age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age}
                        onChange={handleChange}
                    />
                </label>
                <input type='submit' />
            </form>

        </div>

    )
}

export default MyForm