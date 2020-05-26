import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { GenresContainer } from './Genres.style';
import CardContainer from '../../../components/card-container/CardContainer';


const Genres = ({ mediaType }) => {

    const data = {
        popular: useFetch([3, mediaType, 'popular']),
        topRated: useFetch([3, mediaType, 'top_rated']),
        upcoming: useFetch([3, mediaType, 'upcoming']),
        nowPlaying: useFetch([3, mediaType, mediaType === "tv" ? 'on_the_air' : 'now_playing'])
    };

    const isTv = mediaType === "tv";

    return (
        <GenresContainer>
            {data &&
                <>
                    {data.popular &&
                        <CardContainer
                            info={data.popular.results}
                            title={isTv ?
                                "Series Populares"
                                :
                                "Peliculas Populares"}
                            link={`${mediaType}/popular/page/1`}
                            mediaType={mediaType}
                        />
                    }

                    {data.topRated &&
                        <CardContainer
                            info={data.topRated.results}
                            title={isTv ?
                                "Series con mejores criticas"
                                :
                                "Peliculas con mejores criticas"}
                            link={`${mediaType}/top_rated/page/1`}
                            mediaType={mediaType}
                        />
                    }
                    {data.upcoming &&
                        <CardContainer
                            info={data.upcoming.results}
                            title="Peliculas a estrenar"
                            link={`${mediaType}/upcoming/page/1`}
                            mediaType={mediaType}
                        />
                    }
                    {data.nowPlaying &&
                        <CardContainer
                            info={data.nowPlaying.results}
                            title={isTv ?
                                "Series al aire"
                                :
                                "Peliculas en cine"}
                            link={`${mediaType}/${isTv ? "on_the_air" : "now_playing"}/page/1`}
                            mediaType={mediaType}
                        />
                    }
                </>
            }
        </GenresContainer>
    );
}

export default Genres;