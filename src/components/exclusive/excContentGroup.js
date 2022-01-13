import './excContentGroup.css';

function ExcContentGroup() {
  return (
    <div className="exc-content-group">
        <div className="content-container">
            <p className="content-title">Exclusive Content</p>
            <div className='exclusive-summary'>
                <img src="/assets/svg/image-icon.svg"/> <span>21</span>
                <img src="/assets/svg/video-icon.svg"/> <span>8</span>
                <img src="/assets/svg/refresh-icon.svg"/> <span>3 days</span>
            </div>
            <p className="content-description">Find resources to level up your design and creative skills. Learn how to get better clients and make more money</p>
        </div>
    </div>
  );
}

export default ExcContentGroup;