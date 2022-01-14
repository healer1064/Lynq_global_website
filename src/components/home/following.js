import './following.css';

function Following({setFollow, setShowFollowing}) {
    function handleUnfollow() {
        setShowFollowing(false);
        setFollow(false);
    }
    function handleClose() {
        setShowFollowing(false);
    }
    return (
        <div className="following-dialog">
            <div className="following-background" />
            <div className="following-dialog-content">
                <p className="dialog-description">Unfollow Ben Burns?</p>
                <div className="dialog-buttons">
                    <button className="following-btn" onClick={handleUnfollow}>Unfollow</button>
                    <button className="following-cancel" onClick={handleClose}>Cancel</button>
                </div>
                <img 
                    className="dialog-close" 
                    src="/assets/svg/close.svg"
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}

export default Following;