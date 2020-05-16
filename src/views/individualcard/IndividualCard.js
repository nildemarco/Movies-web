import React from 'react';
import { IndividualSection, ContainerImg, ContainerLinks } from './IndividualCard.style';
import { Link, Switch, Route } from 'react-router-dom';
// import InfoCard from '../infocard/InfoCard';
// import RepartoCard from './repartocard/RepartoCard';
// import RecomendationContainer from './repartocard/recomendationcontainer/RecomendationContainer';


const IndividualCard = ({ info }) => {
    return (
        <IndividualSection>
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
            {/* <InfoCard info={info} /> */}
            {/* <RepartoCard info={info}/> */}
            </Switch>

            {/* <RecomendationContainer info={info}/> */}
        </IndividualSection>
    );
}

export default IndividualCard;