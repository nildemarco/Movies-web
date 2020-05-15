import { useState, useEffect } from 'react';

const useFetch = (type) => {

    const [data, setData] = useState(null);

//     const arr = [ 3, "movie", 4, "trending"]
//     const createEndPoints = (arr) => (arr.join("/"))

//     const getApiUrl = () => {
//         const urlBase = 'https://api.themoviedb.org/3/'
//         let urlApi = new URL('https://api.themoviedb.org/3/')
//             urlApi.pathname = createEndPoints(arr) 
//             urlApi.search = new URLSearchParams({
//             api_key: process.env.REACT_APP_API_KEY,
//             page: 3,
//             lenguages: "ES"
//         })
//        console.log(urlApi)
//     }

//   console.log(getApiUrl())
   
//     const getApiUrl = (endpoint, language) =>
//   `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        fetch(`https://api.themoviedb.org/3/movie/545609/credits?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return data
}

export default useFetch;


//https://api.themoviedb.org/3/trending/${type}/week?