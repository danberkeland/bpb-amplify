import { useEffect, useState } from 'react'


export const useFetch = url => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        data: [],
    });

    useEffect(() => {
        console.log(url)
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(data => setState({loading: false, error: false, data: data.body }))
            .catch(error => setState({ loading: false, error, data: [] }));
    }, [url]);

    return state;
};