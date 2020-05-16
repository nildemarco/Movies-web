import React from 'react';
import { RepartoContainer } from './RepartoCard.style';
import Card from '../../card/Card';

const RepartoCard = ({ info }) => {
    return (
        <RepartoContainer>
            {info.cast.map(element => {
                return (
                    <Card
                        key={element.id}
                        title={element.name}
                        img={element.profile_path}
                        subtitle={element.character}
                    />
                );

            })}
        </RepartoContainer>
    );
}

export default RepartoCard;