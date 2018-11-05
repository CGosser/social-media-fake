import React from "react";
import ProfileBottom from "./ProfileBottom";
import ProfileImage from "./ProfileImage";
import ProfileBackground from "./ProfileBackground";

function ProfileContainer(prop){
  const profileContainerStyles = {
    width: '36%',
    height: '200px',
    position: 'relative'
  }
  return (
    <div style={profileContainerStyles}>
      <ProfileImage/>
      <ProfileBackground/>
      <ProfileBottom/>
    </div>
  )
}

export default ProfileContainer;
