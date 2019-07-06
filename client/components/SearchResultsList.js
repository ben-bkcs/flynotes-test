import React from 'react';


export const SearchResultsList = ({ searchResults, listItemClickHandler }) => (
    <ul className="result-list">
        {searchResults.map((searchResult) => (
            <li key={searchResult.id} className="result-list__item">
                <button onClick={() => listItemClickHandler(searchResult.id)}>
                    {searchResult.firstName}{' '}{searchResult.lastName}
                    <span className="result-list__item__email">{searchResult.emailAddress}</span>
                </button>
            </li>
        ))}
    </ul>
)

export default SearchResultsList;
