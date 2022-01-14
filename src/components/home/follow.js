import './follow.css';

function Follow({setFollow, setShowFollow}) {
    function handleClose() {
        setShowFollow(false);
    }
    function handleFollow() {
        setShowFollow(false);
        setFollow(true);
    }
    return (
        <div className="follow-dialog">
            <div className="follow-background" />
            <div className="follow-dialog-content">
                <img className="dialog-img" src="/assets/svg/avatar.svg" />
                <h6 className="dialog-title">Ben Burns</h6>
                <p className="dialog-description">Follow me to get all of my most important updates</p>
                <div className="dialog-form">
                    <label htmlFor="username">Name</label>
                    <div className="dialog-input">
                        <input id="username" name="username" placeholder="Enter your name" />
                    </div>
                    <label htmlFor="email">Email</label>
                    <div className="dialog-input">
                        <input id="email" name="email" placeholder="Enter your email" />
                    </div>
                </div>
                <button className="follow-btn" onClick={handleFollow}>Follow</button>
                <img 
                    className="dialog-close" 
                    src="/assets/svg/close.svg"
                    onClick={() => handleClose()}
                />
            </div>
        </div>
    );
}

export default Follow;