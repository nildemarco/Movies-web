import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Nav, HomeIcons, Projector, Tv } from './NavBar.style';
import SearchBar from './SearchBar';


const NavBar = () => {

    const location = useLocation();

    return (
        <Nav>
            <Link to="/"  >
                <HomeIcons
                    isLocation={location.pathname === "/"}
                />
            </Link>
            <Link to="/movie"  >
                <Projector
                    isLocation={location.pathname.includes("/movie")}
                />
            </Link>
            <Link to="/tv" >
                <Tv
                    isLocation={location.pathname.includes("/tv")}
                />
            </Link>
            <SearchBar />
        </Nav >
    );
}

export default NavBar;