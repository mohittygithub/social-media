import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="cover" />
        <img src={Profile} alt="profile" />
      </div>
      <div className="profileName">
        <span>Mohit Tyagi</span>
        <span>Tech Lead</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>5000</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
