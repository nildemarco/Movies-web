import React from 'react';
import { IndividualSection, ContainerImg, ContainerLinks } from './IndividualCard.style';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import InfoCard from '../../components/infocard/InfoCard';
// import RepartoCard from './repartocard/RepartoCard';
// import RecomendationContainer from './repartocard/recomendationcontainer/RecomendationContainer';


const IndividualCard = () => {
    const params = useParams();

    const info = useFetch([3, params.media, params.id])

    console.log(params.id)

    return (
        <IndividualSection>
            { info &&
              <>
                <ContainerImg>
                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} />
            </ContainerImg>
            <ContainerLinks>
                <Link>
                    INFO
                </Link>
                <Link>
                    REPARTO
                </Link>
                <Link>
                    VIDEOS
                </Link>
                <Link>
                    SIMILARES
                </Link>
            </ContainerLinks>
            <Switch>
                <Route/>
            <InfoCard info={info} />
            {/* <RepartoCard info={info}/> */}
            </Switch>

            {/* <RecomendationContainer info={info}/> */}
            </>
            }
        </IndividualSection>
    );
}

export default IndividualCard;