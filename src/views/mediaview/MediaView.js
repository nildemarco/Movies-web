import React, { useContext } from 'react';
import { MediaContainerSection } from './MediaView.styled';
import CardContainer from '../../components/card-container/CardContainer';
import DataContext from '../../context/DataContext';
import { useParams } from 'react-router-dom';

const MediaView = () => {

    const params = useParams();

    const info = useContext(DataContext);

    const { movies, series } = info;

    return (
        <MediaContainerSection>
            {params.media === "movie" &&
                <>
                    {movies &&
                        <CardContainer
                            info={movies.results}
                            title="Peliculas que son tendencia"
                            mediaType={params.media}
                        />
                    }
                </>
            }
            {params.media === "tv" &&
                <>
                    {series &&
                        <CardContainer
                            info={series.results}
                            title="Series que son tendencia"
                            mediaType={params.media}
                        />}
                </>
            }
        </MediaContainerSection>
    );
}

export default MediaView;