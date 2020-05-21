import React from 'react';
import { IndividualSection, ContainerImg, ContainerLinks } from './IndividualCard.style';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import InfoCard from '../../components/infocard/InfoCard';
import RepartoCard from '../../components/repartocard/RepartoCard';
import MoviesVideos from '../../components/movies-videos/MoviesVideos';
import SimilarMedia from '../../components/similar-media/SimilarMedia';


const IndividualCard = () => {
    const params = useParams();

    const info = useFetch([3, params.media, params.id])

    return (
        <IndividualSection>
            { info &&
              <>
                <ContainerImg>
                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} />
            </ContainerImg>
            <ContainerLinks>
                <Link to={`/${params.media}/${params.id}/info`}>
                    INFO
                </Link>
                <Link to={`/${params.media}/${params.id}/cast`}>
                    REPARTO
                </Link>
                <Link to={`/${params.media}/${params.id}/videos`}>
                    VIDEOS
                </Link>
                <Link to={`/${params.media}/${params.id}/similar`}>
                    SIMILARES
                </Link>
            </ContainerLinks>
            <Switch>
                <Route path="/:media/:id/info"  component={InfoCard}/>
                <Route path="/:media/:id/cast"  component={RepartoCard}/>
                <Route path="/:media/:id/videos"  component={MoviesVideos}/>
                <Route path="/:media/:id/similar"  component={SimilarMedia}/>
            </Switch>
            </>
            }
        </IndividualSection>
    );
}

export default IndividualCard;