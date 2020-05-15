import React from 'react';
import { InfoContainer, InfoDetails } from './InfoCard.styled';

const InfoCard = ({ info }) => {
    return (
        <InfoContainer>
            <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} />
            <InfoDetails>
                <h3>{info.title}</h3>
                <p>{info.overview}</p>
                <p>Duracion: {info.runtime} min</p>
                <p> Genero: {info.genres.map((g, i) => {
                    return (
                        <a key={i} href="/">{g.name}</a>)
                })}</p>
                <p>Presupuesto: $ {info.budget}</p>
                <p>Recaudacion: $ {info.revenue}</p>
                <p>Produccion: {info.production_companies.map(p => `${p.name}, `)}</p>
            </InfoDetails>
        </InfoContainer>
    );
}

export default InfoCard;