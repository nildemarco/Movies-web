import React from 'react';
import { CardContainer } from './RecomendationContainer.style';
 import Card from '../../../card/Card';


const RecomendationContainer = ({info}) => {
    console.log(info)
    return (
       <CardContainer>
            {info.map(element => {
                return (
                    <Card
                        key={element.id}
                        title={element.title}
                        img={element.poster_path}
                    />
                );

            })}   
       </CardContainer>
    );
}

export default RecomendationContainer;