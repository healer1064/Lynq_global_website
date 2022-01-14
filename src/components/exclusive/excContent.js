import './excContent.css';

function ExcContent() {
  return (
    <div className="exclusive-content theme-dark-gray-background">
        <div className="image-wrapper">
            <img
                src="/assets/img/exclusive-content.png"
                className="content-image"
            />
            <div className="image-inside">
                <img 
                    src="/assets/svg/lock.svg"
                    className="lock-image"
                />
                <div className="join-button theme-black-button">
                    Join Now for $5 / month
                </div>
                <p className="already-text">Already have an account?&nbsp;<span>Sign In</span></p>
            </div>
        </div>
        <div className="detail-wrapper theme-black-soft-gray">
            <div className="date-lock">
                <p>December 18, 2021</p>
                <div className="lock-div">
                    <img src="/assets/svg/mini-lock.svg"/>
                    <p>Locked</p>
                </div>
            </div>
            <p className="detail-description">Creative Direction Basics</p>
            <p className="detail-likes">19 likes</p>
        </div>
    </div>
  );
}

export default ExcContent;