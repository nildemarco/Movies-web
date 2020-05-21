import React from 'react';
import { SimilarMediaContainer } from './SimilarMedia.style';
import Card from '../card/Card';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const SimilarMedia = () => {

    const params = useParams();

    const info = useFetch([3, params.media, params.id, 'similar'])
  
    return (
       <SimilarMediaContainer>
            {info && info.results.map(element => {
                return (
                    <Card
                        key={element.id}
                        title={element.title}
                        img={element.poster_path}
                    />
                );

            })}   
       </SimilarMediaContainer>
    );
}

export default SimilarMedia;