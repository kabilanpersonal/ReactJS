import React from 'react'

const DataFetching = (WrappedComponent, url) => {
  return function DataFetchingComponent(props){
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    });


    return <WrappedComponent data={data} loading={loading} error={error} {...props} />;
}
}

export default DataFetching