import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';
import SelectedFriendDrawer from './SelectedFriendDrawer';

export const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFriendId, setSelectedFriendId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <React.Fragment>
            <div className="container">
                <h1>Welcome to friendzy!</h1>
                <SearchForm setSearchResults={setSearchResults} setIsLoading={setIsLoading} />
                <h3>{searchResults.length > 0 ? 'Here are your search results 🎉' : ''}</h3>
                <small>{searchResults.length > 0 ? 'Click an item to view your friends details' : ''}</small>
                <SearchResultsList searchResults={searchResults} listItemClickHandler={setSelectedFriendId}/>
                <SelectedFriendDrawer
                    selectedFriendId={selectedFriendId}
                    isOpen={!!selectedFriendId}
                    closeHandler={() => setSelectedFriendId()}
                />
            </div>
        </React.Fragment>
    )
}

export default App;
