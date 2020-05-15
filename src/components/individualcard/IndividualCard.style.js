import styled from 'styled-components';

export const IndividualSection = styled.section`
width: 100%;
margin: 0;
display: flex;
flex-direction: column;
`;

export const ContainerImg = styled.div`
width: 100%;
img {
    width:100%;
    height: auto;
}
`;

export const ContainerLinks = styled.div`
width: 100%;
height: 140px;
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
font-weight: bold;
 a {
    color: rgb(168, 170, 173);
    margin: 10px;
    text-decoration: none;
    :focus {
        color: #FAFAFA;
        text-decoration: underline;
    }
    :visited {
        text-decoration: none;
    }
    :hover {
        color: #FAFAFA;
    }

}
`;