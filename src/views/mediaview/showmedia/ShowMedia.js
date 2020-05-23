import React from 'react';
import { ShowMediaContainer } from './ShowMedia.style';
import useFetch from '../../../hooks/useFetch';
import CardContainer from '../../../components/card-container/CardContainer';
import PaginationContainer from '../../../components/pagination/PaginationContainer';


const ShowMedia = ({ mediaType, title }) => {

    const isTrending = mediaType.mediagenres === 'trending';

    const propsFetch = isTrending ?
        [3, mediaType.mediagenres, mediaType.media, 'week']
        :
        [3, mediaType.media, mediaType.mediagenres];

    const obj = {
        query: mediaType.query,
        page: mediaType.numberPage
    };

    const data = useFetch(propsFetch, obj ? obj : "")

    return (
        <ShowMediaContainer>
            {data &&
                <>
                    <CardContainer
                        info={data.results}
                        title={title}
                        mediaType={mediaType.media}
                    />
                    <PaginationContainer totalPages={data.total_pages} />
                </>
            }
        </ShowMediaContainer>
    );
}

export default ShowMedia;