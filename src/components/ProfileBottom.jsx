import React from "react";
import ProfileName from "./ProfileName";
import ProfileStats from "./ProfileStats";

function ProfileBottom(prop){
  const profileBottomStyles = {
    border: '2px solid lightgray',
    height: '50%'
  }
  return (
    <div style={profileBottomStyles}>
      <ProfileName/>
      <ProfileStats/>
    </div>
  )
}

export default ProfileBottom;
