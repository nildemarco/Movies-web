import styled from 'styled-components';

export const Nav =styled.nav`
width: 100%;
margin: 0px;
padding: 10px;
background-color: #141414;
display: flex;
align-items: center;
.icons-home {
    margin: 5px 15px;
    width: 30px;
    height: 30px;
    fill: white;
    cursor: pointer;
    :hover {
        fill: rgb(33, 150, 243);
    }
}
label {
    display: flex;
    align-items: center;
}
@media (max-width: 510px) {
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0px;
}
`;

export const SearchInput = styled.input`
width: 250px;
height: 28px;
font-size: 28px;
background-color: #141414;
color: #ffff;
border: none;
@media (max-width: 510px) {
  width: 240px;
  font-size: 18px;
}
`;