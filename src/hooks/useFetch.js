import { useState, useEffect } from 'react';

const useFetch = (arr, obj = {query: "", page:""}) => {

    const [data, setData] = useState(null);
 
    const getApiUrl = () => {
        let urlApi = new URL('https://api.themoviedb.org/3/')
            urlApi.pathname = arr.join("/") 
            urlApi.search = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            languages: "es-ES",
            ...(obj.page && { page: obj.page }),
            ...(obj.query && { query: obj.query })    
        })
        console.log(urlApi)
       return urlApi
    }

    useEffect(() => {
        fetch(getApiUrl())
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return data
}

export default useFetch;