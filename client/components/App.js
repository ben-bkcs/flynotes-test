import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';

export const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFriend, setSelectedFriend] = useState();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <React.Fragment>
            <div>
                <h1>Welcome to friendzy!</h1>
                <SearchForm setSearchResults={setSearchResults} setIsLoading={setIsLoading} />

                <p>{searchResults.length > 0 ? 'Here are your search results 🎉' : ''}</p>
                <small>{searchResults.length > 0 ? 'Click an item to view your friends details' : ''}</small>
                <SearchResultsList searchResults={searchResults} />
            </div>
        </React.Fragment>
    )
}

export default App;
