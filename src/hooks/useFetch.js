import { useState, useEffect } from 'react';

const useFetch = (arr, obj = {query: "", page:""}) => {

    const [data, setData] = useState(null);

    
    const getApiUrl = () => {
        const urlBase = 'https://api.themoviedb.org/3/'
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

//   console.log(getApiUrl())

    useEffect(() => {
        fetch(getApiUrl())
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return data
}

export default useFetch;


//https://api.themoviedb.org/3/trending/${type}/week?