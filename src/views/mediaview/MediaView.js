import React, { useContext } from 'react';
import { MediaContainerSection } from './MediaView.styled';
import CardContainer from '../../components/card-container/CardContainer';
import DataContext from '../../context/DataContext';
import { useParams } from 'react-router-dom';
import ShowMedia from './showmedia/ShowMedia';


const MediaView = () => {

    const params = useParams();

    const info = useContext(DataContext);

    const { movies, series } = info;

    console.log(params)

    return (
        <MediaContainerSection>
            {params.media === "movie" &&
                <>
                    {params.mediagenres === "trending" &&
                        <>
                            {movies &&
                                <CardContainer
                                    info={movies.results}
                                    title="Peliculas que son tendencia"
                                    mediaType={params.media}
                                    page={params.numberPage}
                                />
                            }
                        </>
                    }
                    {params.mediagenres === "popular" &&
                        <>
                            {movies &&
                                <ShowMedia mediaType={params} title="Peliculas populares" />
                            }
                        </>
                    }
                    {params.mediagenres === "top_rated" &&
                        <>
                            {movies &&
                                <ShowMedia mediaType={params} title="Peliculas con mejores Criticas" />
                            }
                        </>
                    }
                    {params.mediagenres === "upcoming" &&
                        <>
                            {movies &&
                                <ShowMedia mediaType={params} title="Peliculas a estrenar" />
                            }
                        </>
                    }
                    {params.mediagenres === "now_playing" &&
                        <>
                            {movies &&
                                <ShowMedia mediaType={params} title="Peliculas en el cine" />
                            }
                        </>
                    }
                </>
            }
            {params.media === "tv" &&
                <>
                    {params.mediagenres === "trending" &&
                        <>
                            {series &&
                                <CardContainer
                                    info={series.results}
                                    title="Series que son tendencia"
                                    mediaType={params.media}
                                    page={params.numberPage}
                                />}
                        </>
                    }
                    {params.mediagenres === "popular" &&
                        <>
                            {series &&
                                <ShowMedia mediaType={params} title="Series populares" />
                            }
                        </>
                    }
                    {params.mediagenres === "top_rated" &&
                        <>
                            {series &&
                                <ShowMedia mediaType={params} title="Series con mejores Criticas" />
                            }
                        </>
                    }
                    {params.mediagenres === "on_the_air" &&
                        <>
                            {series &&
                                <ShowMedia mediaType={params} title="Series en el aire" />
                            }
                        </>
                    }
                </>
            }
            { params.media === "search" &&
               <ShowMedia mediaType={params} title={`Resultados para: ${params.query}`}/>
            }
        </MediaContainerSection>
    );
}

export default MediaView;