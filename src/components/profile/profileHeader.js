import React from 'react';
import  BackButton from '../common/backButton'
import { Link } from "react-router-dom";
import './profileHeader.css';


function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="custom-container">
        <div className="top-div">
          <BackButton/>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="img-div">
          <img
            alt=""
            src="/assets/svg/default-avatar.svg"
            className="profile-avatar theme-black-avatar-border"
          />
          <p className="profile-title">Laurent Bury</p>
        </div>
      </div>  
    </div>
  );
}

export default ProfileHeader;