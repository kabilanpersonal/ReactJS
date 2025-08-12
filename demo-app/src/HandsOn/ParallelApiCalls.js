import { useState, useEffect } from "react";

export default function ParallelApiCalls() {
    const [userData, setUserData] = useState([]);
    const [postData, setpostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        const postUser = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

        Promise.all([fetchUser, postUser])
            .then(([userData, postData]) => {
                setUserData(userData.slice(0, 5));
                setpostData(postData.slice(0, 5));
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false)
            })
    }, []);
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h3>ParallelApiCalls</h3>
            <ul>
                {userData.map(data => (
                    <li key={data.id}> {data.name}-{data.email}</li>
                ))}
            </ul>
            <ul>
                {postData.map(data => (
                    <li key={data.id}> {data.title}</li>
                ))}
            </ul>
        </div>
    )

}

