import React from 'react';
import { SearchInput } from './NavBar.style';
import { ReactComponent as SearchIcon } from './../../assets/lupa.svg';

const SearchBar = () => {
    return (
        <label><SearchIcon className="icons-home" alt="Search" />
            <SearchInput
                type="text"
                placeholder="Search"
            >
            </SearchInput>
        </label>
    );
}

export default SearchBar;