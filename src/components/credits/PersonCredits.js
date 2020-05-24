import React from 'react';
import { useParams } from 'react-router-dom';
import { CardCreditsContainer } from './PersonCredit.style';
import Card from '../card/Card';
import useFetch from '../../hooks/useFetch';


const PersonCredits = () => {

    const params = useParams();

   const info = useFetch([3, params.media, params.id, "combined_credits"]);

   console.log(info)

    return (
        <CardCreditsContainer>
            {info &&
            info.cast.map(e => {
                return(
                    <Card
                    key={e.id}
                    id={e.id}
                    img={e.poster_path}
                    title={e.title}
                    subtitle={e.character}
                    mediaType={e.media_type}
                    />               
                );
            })
            }

        </CardCreditsContainer>
     
    );
}

export default PersonCredits;