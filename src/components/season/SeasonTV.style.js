import styled from 'styled-components';

export const SeasonTvContainer = styled.section`
display: flex;
flex-wrap: wrap;
`;

export const EpisodeCard = styled.article`
width: 650px;
margin: 20px;
padding-left: 20px;
display: flex;
flex-direction: column;
color: #FAFAFA;
a {
    text-decoration: none;
    color: #FAFAFA;
}
img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    }
}
.image-not-available {
    width: 100%;
    height: 378px;
    display: flex;
    justify-content: center;
    align-items:center;
    .icon-img-card {
        width:40px;
        height:50px;
        fill:rgb(168, 170, 173);
    }
}
h3 {
    margin: 5px;
    font-size: 28px;
    font-weight: lighter;
}`;