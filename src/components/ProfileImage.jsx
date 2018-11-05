import React from "react";

function ProfileImage(prop){
  const profileImageContainerStyles = {
    position: 'absolute',
    zIndex: '100',
    top: '50',
    border: '2px solid white',
    borderRadius: '20px',
    padding: '15px',
    backgroundColor: 'lightblue',
    left: '15'
  }
  const profileImageStyles = {
    width: '40px'
  }
  return (
    <div style={profileImageContainerStyles}>
      <img style={profileImageStyles} src='https://image.flaticon.com/icons/png/128/118/118781.png'></img>
    </div>
  )
}

export default ProfileImage;
