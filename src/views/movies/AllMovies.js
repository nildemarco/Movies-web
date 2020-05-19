import React, { useContext } from 'react';
import { AllMoviesContainer } from './AllMovies.style';
import CardContainer from '../../components/card-container/CardContainer';
import DataContext from '../../context/DataContext';

const AllMovies = () => {

    const info = useContext(DataContext);

    const { movies } = info

    return (
        <AllMoviesContainer>
            {movies &&
                <CardContainer
                    info={movies.results}
                    title="Peliculas que son tendencia"
                />
            }
        </AllMoviesContainer>
    );
}

export default AllMovies;