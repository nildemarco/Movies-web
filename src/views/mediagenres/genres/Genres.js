import React from 'react';
import { GenresContainer } from './Genres.style';
import useFetch from '../../../hooks/useFetch';
import CardContainer from '../../../components/card-container/CardContainer';


const Genres = ({mediaType}) => {

    const data = {
        popular: useFetch([3, mediaType, 'popular']),
        topRated: useFetch([3, mediaType, 'top_rated']),
        upcoming: useFetch([3, mediaType, 'upcoming']),
        nowPlaying: useFetch([3, mediaType,  mediaType === "tv"? 'on_the_air':'now_playing'])
    };
    
    return (
        <GenresContainer>
            {data &&
                <>
                    {data.popular &&
                        <CardContainer
                            info={data.popular.results}
                            title= {mediaType === "tv"? 
                            "Series Populares":
                            "Peliculas Populares"}
                            link={`${mediaType}/popular/page/1`}
                            mediaType={mediaType}
                        />
                    }

                    {data.topRated &&
                        <CardContainer
                            info={data.topRated.results}
                            title= {mediaType === "tv"? 
                            "Series con mejores criticas" :
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
                            title={mediaType === "tv"? 
                            "Series al aire" :
                            "Peliculas en cine"}
                            link={`${mediaType}/${mediaType === "tv"? "on_the_air": "now_playing"}/page/1`}
                            mediaType={mediaType}
                        />
                    }
                </>
            }
           
        </GenresContainer>
    );
}

export default Genres;