import React from 'react';
import { InfoContainer, InfoDetails } from './InfoCard.styled';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Rating from '@material-ui/lab/Rating';
import { FaImdb, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const InfoCard = () => {

    const params = useParams();

    const info = useFetch([3, params.media, params.id]);

    const externalsIds = useFetch([3, params.media, params.id, "external_ids"]);

    const arrExt = externalsIds && Object.entries(externalsIds);
    
   
    return (
        <>
            {info &&
                <InfoContainer>
                    {info.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} /> :
                        <ImgNotAvailable className="icon-img-card" />
                    }
                    <InfoDetails>
                        <h3>{params.media === "tv" ? info.name : info.title}</h3>
                        <Rating name="rating" defaultValue={info.vote_average/2} precision={0.5} readOnly/>
                        <p>{info.overview}</p>
                        {params.media === "tv" &&
                            <>
                                <p>Temporadas: {info.number_of_seasons}</p>
                                <p>Episodios: {info.number_of_episodes}</p>
                            </>
                        }
                        <p>Duracion: {params.media === "movie" ? info.runtime : info.episode_run_time[0]} min</p>
                        <p> Genero: {info.genres && info.genres.map((g, i) => {
                            return (
                                <a key={i} href={`/search/multi/${g.name}/page/1`}>{g.name}</a>)
                        })}</p>
                        {params.media === "movie" &&
                            <>
                                <p>Presupuesto: $ {info.budget}</p>
                                <p>Recaudacion: $ {info.revenue}</p>
                            </>
                        }
                        <p>Produccion: {info.production_companies && info.production_companies.map(p => `${p.name}, `)}</p>
                    </InfoDetails>
                    { externalsIds && 
                    <div></div>
                    //    arrExt.map(e => {
                          
                    //    })
                    }
                </InfoContainer>
            }
        </>
    );
}

export default InfoCard;