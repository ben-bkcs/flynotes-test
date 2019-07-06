import React from 'react';


export const SearchResultsList = ({ searchResults }) => (
    <ul className="result-list">
        {searchResults.map((searchResult) => (
            <li key={searchResult.id} className="result-list__item">
                <button>
                    {searchResult.firstName}{' '}{searchResult.lastName}
                </button>
            </li>
        ))}
    </ul>
)

export default SearchResultsList;
