import React from 'react';
import { MoviesVideosContainer, VideoDetails } from './MoviesVideos.style';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const MoviesVideos = () => {

    const params = useParams();

    const info = useFetch([3, params.media, params.id, 'videos'])
    
    return (
        <MoviesVideosContainer>
            {info && info.results.map(video => {
                return (
                    <VideoDetails>
                        <iframe
                            id={video.id}
                            type="text/html"
                            width="640"
                            height="360"
                            src={`http://www.youtube.com/embed/${video.key}`}
                            frameBorder="0"
                            title={video.name}
                        />
                        <h4>{video.name}</h4>
                    </VideoDetails>
                );
            })
            }
        </MoviesVideosContainer>
    );
}

export default MoviesVideos;