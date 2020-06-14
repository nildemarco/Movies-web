import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerSection, TitleSection, ContainerArticles } from './CardContainer.style';
// Privilegia escribir estas rutas asi:
// import Card from '../card/Card';
import Card from './../card/Card';
// bien este import
import { ReactComponent as ArrowIcon } from '../../assets/flechas.svg';

// La logica para mostrar solo 5 cards en algunos casos esta muy bien hecha, 
// pero es algo mas compleja de lo recomendable en el JSX - privilegiamos
// dejar la logica fuera del JSX, y que este sea lo mas presentacional posible. 
// Una alternativa seria hacer un minicomponente en este archivo, asi:

    // const CardPresenter = ({ info }) => {
    //     console.log(info)
    //     return info.map((element, i) => {
    //         if (link && i < 5) {
    //             return (
    //                 <Card
    //                     key={element.id}
    //                     id={element.id}
    //                     title={element.title ? element.title : element.original_name}
    //                     img={element.poster_path}
    //                     mediaType={isSearch ? element.media_type : mediaType}
    //                 />
    //             );
    //         }
    //         else if (!link) {
    //             return (
    //                 <Card
    //                     key={element.id}
    //                     id={element.id}
    //                     title={element.title ? element.title : element.original_name}
    //                     img={element.poster_path}
    //                     mediaType={isSearch ? element.media_type : mediaType}
    //                 />
    //             );
    //         }
    //     })
    // }

    // Y en el JSX escribir simplemente:

    // <ContainerArticles wrap={link ? 1 : 0}>
    //     <CardPresenter info={info}/>
    // </ContainerArticles>

const CardContainer = ({ info, title, link, mediaType }) => {

    const isSearch = mediaType === "search";

    return (
        <ContainerSection>
            {info &&
                <>
                    <TitleSection>
                        {link ?
                            <Link to={`/${link}`}>
                                <h2>{title}</h2>
                                <ArrowIcon className="card-container-arrow" />
                            </Link> :
                            <h2>{title}</h2>
                        }
                    </TitleSection>
                    <ContainerArticles wrap={link ? 1 : 0}>
                        {
                            info.map((element, i) => {
                                if (link && i < 5) {
                                    return (
                                        <Card
                                            key={element.id}
                                            id={element.id}
                                            title={element.title ? element.title : element.original_name}
                                            img={element.poster_path}
                                            mediaType={isSearch ? element.media_type : mediaType}
                                        />
                                    );
                                }
                                else if (!link) {
                                    return (
                                        <Card
                                            key={element.id}
                                            id={element.id}
                                            title={element.title ? element.title : element.original_name}
                                            img={element.poster_path}
                                            mediaType={isSearch ? element.media_type : mediaType}
                                        />
                                    );
                                }
                            })
                        }
                    </ContainerArticles>
                </>
            }
            {/* Cuidado, este componente no esta bien cerrado y eso puede traer problemas */}
        </ContainerSection >
    );
}

export default CardContainer;
