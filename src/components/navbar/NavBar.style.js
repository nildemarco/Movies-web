import styled from 'styled-components';

export const Nav =styled.nav`
width: 100%;
height: 60px;
margin: 0px;
background-color: #141414;
display: flex;
align-items: center;
.icons-home {
    margin: 5px 15px;
    width: 28px;
    height: 28px;
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
`;

export const SearchInput = styled.input`
width: 250px;
height: 28px;
font-size: 28px;
background-color: #141414;
color: #ffff;
border: none;
`;