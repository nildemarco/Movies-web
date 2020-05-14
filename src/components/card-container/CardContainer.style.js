import styled from 'styled-components';

export const ContainerSection = styled.section`
width: 90%;
display: flex;
flex-direction: column;
`;

export const TitleSection = styled.h2`
margin: 5px;
color: #FAFAFA;
font-weight: lighter;
display: flex;
align-items: center;
font-size: 32px;
a {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.card-container-arrow {
 width: 20px;
 height: 20px;
 margin: 10px;
 fill: rgb(33, 150, 243);
}
`

export const ContainerArticles = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
`;