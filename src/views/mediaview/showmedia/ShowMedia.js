import React from 'react';
import { ShowMediaContainer } from './ShowMedia.style';
import useFetch from '../../../hooks/useFetch';
import CardContainer from '../../../components/card-container/CardContainer';


const ShowMedia = ({ mediaType, title }) => {

    const movies = useFetch([3, mediaType.media, mediaType.mediagenres])
    return (
        <ShowMediaContainer>
            {movies &&
                <CardContainer
                    info={movies.results}
                    title={title}
                    mediaType={mediaType.media}
                />}
        </ShowMediaContainer>
    );
}

export default ShowMedia;