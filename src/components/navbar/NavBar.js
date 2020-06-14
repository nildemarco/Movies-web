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
                // Si entiendo  bien, seria mejor pasar true y false en lugar de 1 y 0
                // Usar el tipo correcto siempre es mas descriptivo y claro. 
                    islocation={location.pathname === "/"? 1: 0}
                />
            </Link>
            <Link to="/movie"  >
                <Projector
                    islocation={location.pathname.includes("/movie")? 1: 0}
                />
            </Link>
            <Link to="/tv" >
                <Tv
                    islocation={location.pathname.includes("/tv")? 1: 0}
                />
            </Link>
            <SearchBar />
            {/* Cuidado a la hora de cerrar los componentes! */}
        </Nav >
    );
}

export default NavBar;
