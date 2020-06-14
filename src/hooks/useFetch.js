import { useState, useEffect } from 'react';

// Este hook es excelente. 
const useFetch = (arr, obj = { query: "", page: "", with_genres: "" }) => {

    const [data, setData] = useState(null);

    const getApiUrl = () => {
        let urlApi = new URL('https://api.themoviedb.org/3/')
        urlApi.pathname = arr.join("/")
        urlApi.search = new URLSearchParams({
            api_key: "6a93319b2d78795675b8bd9aa0965a95",
            language: "es-ES",
            ...(obj.page && { page: obj.page }),
            ...(obj.query && { query: obj.query }),
            ...(obj.with_genres && { with_genres: obj.with_genres })
        })

        return urlApi;
    }

    useEffect(() => {
        fetch(getApiUrl())
            .then(res => res.json())
            .then(data => setData(data));
    }, [...arr, obj.query, obj.page])

    return data;
}

export default useFetch;
