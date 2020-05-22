import React from 'react';
import { SearchInput } from './NavBar.style';
import { ReactComponent as SearchIcon } from './../../assets/lupa.svg';

const SearchBar = () => {

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
        <label><SearchIcon className="icons-home" alt="Search" />
            <SearchInput
                type="text"
                placeholder="Search"
                onChange={handleChange}
            >
            </SearchInput>
        </label>
        </form>
    );
}

export default SearchBar;