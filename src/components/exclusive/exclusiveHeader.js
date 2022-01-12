import './exclusiveHeader.css';

function ExclusiveHeader() {
  return (
    <div className="exclusive-header">
        <img
            alt=""
            src="assets/svg/avatar.svg"
            className="exclusive-avatar"
        />
        <p className="exclusive-title">Ben Burns</p>
    </div>
  );
}

export default ExclusiveHeader;