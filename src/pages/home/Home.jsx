import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <ProfileSide />
        <div className="postSide">posts</div>
        <div className="rightSide">right</div>
      </div>
    </>
  );
};

export default Home;
