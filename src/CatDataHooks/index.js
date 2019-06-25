import React from 'react';

export default  () => {
    const [cat, setCat] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    React.useEffect(() => {
         const fetchData = () =>
             setLoading(true);
            fetch('https://api.thecatapi.com/v1/images/search')
             .then(res => res.json())
             .then((data) => (setCat(data[0]),setLoading(false)))
        fetchData();

    }, []);
    //[] prevents re-rendering on update, in other words runs only on Mount;

    return {cat, loading};

    // VS. What we did in componentDidMount:
    // fetch('https://api.thecatapi.com/v1/images/search')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({ data: data, loading: false, error: false });
    //     })


}