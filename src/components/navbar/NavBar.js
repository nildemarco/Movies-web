import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './NavBar.style';
import { ReactComponent as HomeIcon } from './../../assets/home.svg';
import { ReactComponent as ProjectorIcon } from './../../assets/movie.svg';
import { ReactComponent as TvIcon } from './../../assets/tv.svg';
import SearchBar from './SearchBar';


const NavBar = () => {
    return (
        <Nav>
            <Link to="/">
                <HomeIcon className="icons-home" />
            </Link>
            <Link to="/movie">
                <ProjectorIcon className="icons-home" />
            </Link>
            <Link to="/tv">
                <TvIcon className="icons-home" />
            </Link>
            <SearchBar />
        </Nav >
    );
}

export default NavBar;