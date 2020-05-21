import styled from 'styled-components';

export const InfoContainer = styled.article`
display: flex;
align-items: flex-start;
padding: 20px;
color: rgb(220, 221, 222);
img {
    width: 350px;
    height: auto;
}
`;

export const InfoDetails = styled.div`
width: 40%;
margin-left: 30px;
display: flex;
flex-direction: column;
h3 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: lighter;
}
p {
    font-size: 20px;
    font-weight: lighter;
    line-height: 20px;
    a {
    color: rgb(33, 150, 243);
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
        color: rgb(33, 150, 243);
    }
   }
}
`;