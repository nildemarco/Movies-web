import React from 'react';
import { InfoContainer, InfoDetails } from './InfoCard.styled';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const InfoCard = () => {

    const params = useParams();

    const info = useFetch([3, params.media, params.id]);

    return (
        <>
            {info &&
                <InfoContainer>
                    <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} />
                    <InfoDetails>
                        <h3>{info.title}</h3>
                        <p>{info.overview}</p>
                        <p>Duracion: {info.runtime} min</p>
                        <p> Genero: {info.genres && info.genres.map((g, i) => {
                            return (
                                <a key={i} href="/">{g.name}</a>)
                        })}</p>
                        <p>Presupuesto: $ {info.budget}</p>
                        <p>Recaudacion: $ {info.revenue}</p>
                        <p>Produccion: {info.production_companies && info.production_companies.map(p => `${p.name}, `)}</p>
                    </InfoDetails>
                </InfoContainer>
            }
        </>
    );
}

export default InfoCard;