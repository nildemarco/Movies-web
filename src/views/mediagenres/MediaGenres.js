import React from 'react';
import { useParams } from 'react-router-dom';
import { MediaGenresContainer } from './MediaGenres.style';
import Genres from './genres/Genres';

// No entiendo por que este componente existe, si su unica funcion es mirar los params y 
// pasarselos a Genres. No es algo que Genres podria hacer por su cuenta? 

const MediaGenres = () => {

    const params = useParams();

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
