import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const SelectedFriendDrawer = ({ selectedFriendId, closeHandler, isOpen }) => {
    const [selectedFriend, setSelectedFriend] = useState();

    useEffect(() => {
        getFriendData();
    }, [selectedFriendId]);

    const getFriendData = async () => {
        try {
            if (selectedFriendId) {
                const { data } = await axios.get(`/api/friends/${selectedFriendId}`);
                setSelectedFriend(data);
            }
        } catch (error) {
            console.log('erroring getting friend from api', err.message);
        }
    }
    return (
        <React.Fragment>
            <div
                className={`drawer-overlay${isOpen ? ' drawer-overlay--open' : ''}`}
                onClick={closeHandler}
            ></div>
            <div className={`drawer${isOpen ? ' drawer--open' : ''}`}>
                {(!!isOpen && !!selectedFriend) && (
                    <React.Fragment>
                        <span>Selected friend:</span>
                        <h2>{selectedFriend.firstName}{' '}{selectedFriend.lastName}</h2>
                        <dl>
                            <dt>Email Address:</dt>
                            <dd><a href={`mailto:${selectedFriend.emailAddress}`} target="_blank" rel="noopener noreferrer">{selectedFriend.emailAddress}</a></dd>
    
                            <dt>Friend record created:</dt>
                            <dd>{selectedFriend.createdAt}</dd>
    
                            <dt>Friend record last updated:</dt>
                            <dd>{selectedFriend.updatedAt}</dd>
                        </dl>
                        <button className="btn btn--primary" onClick={closeHandler}>Close</button>
                    </React.Fragment>
                )}
                {(!!isOpen && !selectedFriend) && (
                    <p>Loading...</p>
                )}
            </div>
        </React.Fragment>
    )
}

export default SelectedFriendDrawer;
