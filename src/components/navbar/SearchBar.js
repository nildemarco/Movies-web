import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchInput } from './NavBar.style';
import { ReactComponent as SearchIcon } from './../../assets/lupa.svg';

const SearchBar = () => {

    const history = useHistory();

    const [querySearch, setQuerySearch] = useState('');

    const handleChange = (e) => {
        setQuerySearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/multi/${querySearch}/page/1`);
        setQuerySearch('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <SearchIcon className="icons-home" alt="Search" />
                <SearchInput
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    value={querySearch}
                />
            </label>
        </form>
    );
}

export default SearchBar;