import React from 'react';
import { HomeContainer } from './Home.style';
import CardContainer from '../../components/card-container/CardContainer';
import useFecth from '../../hooks/useFetch';

const Home = () => {

    const movies = useFecth([3, 'trending', 'movies', 'week']);

    const series = useFecth([3, 'trending', 'tv', 'week']);

    console.log("pelis", movies)
    console.log("series", series)

    return (
        <HomeContainer>
            {movies &&
                <CardContainer
                    info={movies.results}
                    title="Peliculas que son tendencia"
                    link="/trending/page/1"
                />
            }
            {series &&
                <CardContainer
                    info={series.results}
                    title="Series que son tendencia"
                    link="/trending/page/1"
                />
            }
        </HomeContainer>
    );
}

export default Home; 