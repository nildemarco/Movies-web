import styled from 'styled-components';

export const CardContainer = styled.article`
width: 250px;
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
        transform: scale(1.1);
    }
}
h3 {
    font-size: 30px;
    font-weight: lighter;
}
`;