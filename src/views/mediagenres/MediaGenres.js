import React from 'react';
import { MediaGenresContainer } from './MediaGenres.style';
import { useParams } from 'react-router-dom';
import Genres from './genres/Genres';


const MediaGenres = () => {

    const params = useParams()

    return (
        <MediaGenresContainer>
            {params.media === "movie" &&
                <Genres mediaType="movie" />
            }
            {params.media === "tv" &&
                <Genres mediaType="tv" />
            }
        </MediaGenresContainer>
    );
}

export default MediaGenres;