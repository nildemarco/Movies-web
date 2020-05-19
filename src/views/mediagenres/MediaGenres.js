import React from 'react';
import { MediaGenresContainer } from './MediaGenres.style';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CardContainer from '../../components/card-container/CardContainer';


const MediaGenres = () => {

    const params = useParams()
    console.log(params.media)

    const movies = {
        popular: useFetch([3, params.media ==='movie'&& "movie", 'popular']),
        topRated: useFetch([3, params.media ==='movie'&& "movie", 'top_rated']),
        upcoming: useFetch([3, params.media ==='movie'&& "movie", 'upcoming']),
        nowPlaying: useFetch([3, params.media ==='movie'&& "movie", 'now_playing'])
    }
    const series = {
        popular: useFetch([3, params.media ==='tv'&& "tv", 'popular']),
        topRated: useFetch([3, params.media ==='tv'&& "tv", 'top_rated']),
        onTheAir: useFetch([3, params.media ==='tv'&& "tv", 'on_the_air'])
    }
   console.log(movies)
    return (
        <MediaGenresContainer>
            {movies ?
                <>
                    {movies.popular &&
                        <CardContainer
                            info={movies.popular.results}
                            title="Peliculas Populares"
                            link={`${params.media}/popular`}
                            mediaType={params.media}
                        />
                    }

                    {movies.topRated &&
                        <CardContainer
                            info={movies.topRated.results}
                            title="Peliculas con mejores criticas"
                            link={`${params.media}/top_rated`}
                            mediaType={params.media}
                        />
                    }
                    {movies.upcoming &&
                        <CardContainer
                            info={movies.upcoming.results}
                            title="Peliculas a estrenar"
                            link={`${params.media}/upcoming`}
                            mediaType={params.media}
                        />
                    }
                    {movies.nowPlaying &&
                        <CardContainer
                            info={movies.nowPlaying.results}
                            title="Peliculas en cine"
                            link={`${params.media}/now_playing`}
                            mediaType={params.media}
                        />
                    }
                </>:
               " No hay resultados"

            }
            {series &&
                <>
                    {series.popular &&
                        <CardContainer
                            info={series.popular.results}
                            title="Series Populares"
                            link={`${params.media}/popular`}
                            mediaType={params.media}
                        />
                    }
                    {series.topRated &&
                        <CardContainer
                            info={series.topRated.results}
                            title="Series con mejores criticas"
                            link={`${params.media}/top_rated`}
                            mediaType={params.media}
                        />
                    }
                    {series.onTheAir &&
                        <CardContainer
                            info={series.onTheAir.results}
                            title="Series al aire "
                            link={`${params.media}/on_the_air`}
                            mediaType={params.media}
                        />
                    }
                </>
            }
        </MediaGenresContainer>
    );
}

export default MediaGenres