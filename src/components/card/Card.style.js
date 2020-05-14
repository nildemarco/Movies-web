import styled from 'styled-components';

export const CardContainer = styled.article`
width: 250px;
/* height: 550px; */
margin: 10px;
display: flex;
flex-direction: column;
color: #FAFAFA; 
img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    }
}
h3 {
    font-size: 28px;
    font-weight: lighter;
}
`;