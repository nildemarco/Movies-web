import React from 'react';
import { RepartoContainer } from './RepartoCard.style';
import Card from '../card/Card';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const RepartoCard = () => {

    const params = useParams();
    
    const info = useFetch([3, params.media, params.id, 'credits']);

    return (
        <RepartoContainer>
            {info && info.cast.map(element => {
                return (
                    <Card
                        key={element.id}
                        id={element.id}
                        title={element.name}
                        img={element.profile_path}
                        subtitle={element.character}
                        mediaType="person"
                    />
                );
            })}
        </RepartoContainer>
    );
}

export default RepartoCard;