import React from 'react';
import { ShowMediaContainer } from './ShowMedia.style';
import useFetch from '../../../hooks/useFetch';
import CardContainer from '../../../components/card-container/CardContainer';


const ShowMedia = ({ mediaType, title }) => {

    const obj = {
        query: mediaType.query
    }

    const data = useFetch([3, mediaType.media, mediaType.mediagenres], obj? obj : "")
    
    return (
        <ShowMediaContainer>
            {data &&
                <CardContainer
                    info={data.results}
                    title={title}
                    mediaType={mediaType.media}
                />}
        </ShowMediaContainer>
    );
}

export default ShowMedia;