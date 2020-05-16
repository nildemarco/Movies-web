import React from 'react';
import { ContainerSection, TitleSection, ContainerArticles } from './CardContainer.style';
import Card from './../card/Card';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/flechas.svg';


const CardContainer = ({ info, title, link }) => {
    return (
        <ContainerSection>
            <TitleSection>
                {title}
                {link &&
                    <Link to={`/${link}`}>
                        <ArrowIcon className="card-container-arrow" />
                    </Link>
                }
            </TitleSection>
            <ContainerArticles>
                {
                    info.map((element, i) => {
                        if (link) {
                            if (i < 5) {
                                return (
                                    <Card
                                        key={element.id}
                                        title={element.title}
                                        img={element.poster_path}
                                    />
                                );
                            }
                        }
                        else {
                            return (
                                <Card
                                    key={element.id}
                                    title={element.title}
                                    img={element.poster_path}
                                />
                            );
                        }
                    })
                }
            </ContainerArticles>
        </ContainerSection>
    );
}

export default CardContainer;
