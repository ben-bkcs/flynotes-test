import React from 'react';

export const SelectedFriendDrawer = ({ selectedFriend, closeHandler, isOpen }) => (
    <React.Fragment>
        <div
            className={`drawer-overlay${isOpen ? ' drawer-overlay--open' : ''}`}
            onClick={closeHandler}
        ></div>
        <div className={`drawer${isOpen ? ' drawer--open' : ''}`}>
            {!!isOpen && (
                <React.Fragment>
                    <span>Selected friend:</span>
                    <h2>{selectedFriend.firstName}{' '}{selectedFriend.lastName}</h2>
                    <dl>
                        <dt>Email Address:</dt>
                        <dd><a href={`mailto:${selectedFriend.emailAddress}`}>{selectedFriend.emailAddress}</a></dd>

                        <dt>Friend record created:</dt>
                        <dd>{selectedFriend.createdAt}</dd>

                        <dt>Friend record last updated:</dt>
                        <dd>{selectedFriend.updatedAt}</dd>
                    </dl>
                    <button className="btn btn--primary" onClick={closeHandler}>Close</button>
                </React.Fragment>
            )}
        </div>
    </React.Fragment>
)

export default SelectedFriendDrawer;
