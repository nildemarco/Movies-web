import React, { useContext } from 'react';
import { HomeContainer } from './Home.style';
import CardContainer from '../../components/card-container/CardContainer';
import DataContext from '../../context/DataContext';

const Home = () => {
  const info = useContext(DataContext);

  const {movies, series} = info;

    return (
        <HomeContainer>
            {movies &&
                <CardContainer
                    info={movies.results}
                    title="Peliculas que son tendencia"
                    link="movie/trending/page/1"
                />
            }
            {series &&
                <CardContainer
                    info={series.results}
                    title="Series que son tendencia"
                    link="tv/trending/page/1"
                />
            }
        </HomeContainer>
    );
}

export default Home; 