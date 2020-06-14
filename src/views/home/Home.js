import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { HomeContainer } from './Home.style';
import CardContainer from '../../components/card-container/CardContainer';

const Home = () => {
  const info = useContext(DataContext);

  // Quiza convendria agregar aqui un componente que se renderice en caso de que falle
  // el fetch tanto en movies como series, con un mensaje tipo "No pudimos cargar la informacion". 
  const {movies, series} = info;

    return (
        <HomeContainer>
            {movies &&
                <CardContainer
                    info={movies.results}
                    title="Peliculas que son tendencia"
                    link="movie/trending/page/1"
                    mediaType="movie"
                />
            }
            {series &&
                <CardContainer
                    info={series.results}
                    title="Series que son tendencia"
                    link="tv/trending/page/1"
                    mediaType="tv"
                />
            }
        </HomeContainer>
    );
}

export default Home; 
