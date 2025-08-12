import { useEffect, useState } from "react";

// Search and filter in the list and debouncing it for 0.5 s
function SearchAndFilter() {

    const [searchItem, setSearchItem] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (!searchItem.trim()) {
            setResult([]);
            return;
        }
        const deBounced = setTimeout(() => {
            fetchData(searchItem);
        }, 500);

        return () => clearTimeout(deBounced)
    }, [searchItem])

    const fetchData = async search => {
        const fruits = [
            'Apple',
            'Mango',
            'Banana',
            'Guava',
            'Grapes',
            'Chikku',
            'Papaya',
            'Pome',
        ];
        const filteredItem = fruits.filter((item) =>
            item.toLowerCase().includes(searchItem.toLowerCase())
        );

        setResult(filteredItem)

    }



    return (
        <>
            <h3>Searching and Filtering Elements in the List</h3>
            <input type="text" placeholder="SearchItem" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />

            <ul>
                {result.length > 0 ? (result.map((item, i) => (
                    <li key={i}>{item}</li>
                ))) : (<li>No Records Found</li>)}
            </ul>
        </>
    );
}
export default SearchAndFilter;