import React, { useState } from 'react';
import { SeasonTvContainer, EpisodeCard } from './SeasonTV.style';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg';

const SeasonTv = ({seasons}) => {
 
    const params = useParams();
    console.log(params)
    // const [seasonNumber, setSeasonNumber] =useState(1)
    const info = useFetch([3, params.media, params.id, "season", 3]);

    return (
        <SeasonTvContainer>
            {info &&
                info.episodes.map(e => {
                    return(
                    <EpisodeCard key={e.id}>
                        <Link to={`${params.media}/${params.id}/info`}>
                           {e.still_path?
                            <img 
                            src={`https://image.tmdb.org/t/p/original${e.still_path}`} 
                            alt={e.name} />:
                            <div className="image-not-available">
                                <ImgNotAvailable className="icon-img-card" />
                            </div>
                            }
                            <h3>{e.name}</h3>
                            <p>{e.overview}</p>
                        </Link>
                    </EpisodeCard>
                    );
                })
            }
        </SeasonTvContainer>
    );
}

export default SeasonTv;