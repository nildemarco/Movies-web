import React from 'react';
import { CardContainer } from './Card.style';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg'

const Card = ({ title, img, subtitle }) => {
    return (
        <CardContainer>
            {img ?
                <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} /> :
                <div className="image-not-available">
                    <ImgNotAvailable className="icon-img-card" />
                </div>
            }
            <h3>{title}</h3>
            {
                subtitle &&
                <h4>{subtitle}</h4>
            }
        </CardContainer>
    );
}

export default Card;