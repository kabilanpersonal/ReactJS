// Search and filter in the list
function SearchAndFilter() {
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
  
    const [searchItem, setSearchItem] = useState('');
    const filteredItem = fruits.filter((item) =>
      item.toLowerCase().includes(searchItem.toLowerCase())
    );
  
    return (
      <>
        <h3>Searching and Filtering Elements in the List</h3>
        <input type="text" placeholder="SearchItem" value = {searchItem} onChange = {(e)=> setSearchItem(e.target.value)}/>
  
        <ul>
          {filteredItem.length > 0 ? (filteredItem.map((item,i) => (
            <li key={i}>{item}</li>
          ) )) : (<li>No Records Found</li>) }
        </ul>
      </>
    );
  }
  export default SearchAndFilter;