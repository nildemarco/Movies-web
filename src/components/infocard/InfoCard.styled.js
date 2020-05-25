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
.icon-img-card {
        width:40px;
        height:50px;
        fill:rgb(168, 170, 173);
    }
@media (max-width: 768px) {
    flex-direction: column;
    img {
        width: 280px;
    }
}
`;

export const InfoDetails = styled.div`
@media (min-width: 320px) and (max-width: 485px) {
  width: 90%;
  margin-left: 10px;
  p{
      font-size: 10px;
  }
}
@media (max-width: 770px) {
     .info-card-title {
           font-size: 40px;
       }
       p {
           font-size: 15px;
           display: flex;
           flex-wrap: wrap;
       }
}
width: 50%;
margin-left: 30px;
display: flex;
flex-direction: column;
h3 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: lighter;
}
.MuiRating-root {
    color: rgb(33, 150, 243);
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

export const ExternalIdContainer = styled.div`
display:flex;
padding-left: 0px;
`;