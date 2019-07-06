import React from 'react';


export const SearchResultsList = ({ searchResults, listItemClickHandler }) => (
    <ul className="result-list">
        {searchResults.map((searchResult) => (
            <li key={searchResult.id} className="result-list__item">
                <button onClick={() => listItemClickHandler(searchResult)}>
                    {searchResult.firstName}{' '}{searchResult.lastName}
                </button>
            </li>
        ))}
    </ul>
)

export default SearchResultsList;
