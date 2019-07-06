import React, { useState } from 'react';
import axios from 'axios';

export const SearchForm = ({ setSearchResults, setIsLoading }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/api/friends?filter=${searchTerm}`);
            setSearchResults(data);
        } catch (err) {
            console.log('erroring executing search', err.message);
            // TODO - show error message in UI
        }
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="search-term" className="label">Search for your friends:</label>
            <input
                type="search"
                id="search-term"
                className="input input--large"
                placeholder="Leave blank to return all friends 😀"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn--primary">Search</button>
        </form >
    )
};

export default SearchForm;
