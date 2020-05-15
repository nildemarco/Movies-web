import React from 'react';
import { IndividualSection, ContainerImg, ContainerLinks } from './IndividualCard.style';
import { Link } from 'react-router-dom';
import InfoCard from './infocard/InfoCard';
import RepartoCard from './repartocard/RepartoCard';


const IndividualCard = ({ info }) => {
    return (
        <IndividualSection>
            <ContainerImg>
                <img src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`} />
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
            {/* <InfoCard info={info} /> */}
            <RepartoCard info={info}/>
        </IndividualSection>
    );
}

export default IndividualCard;