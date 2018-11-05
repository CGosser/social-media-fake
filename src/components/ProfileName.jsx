import React from "react";


function ProfileName(prop){
  const profileNameStyles = {
    marginTop: '2px'
  }
  const profileNameDivStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '20px'

  }
  return (
    <div style={profileNameDivStyles}>
      <h3 style={profileNameStyles}>Kellie Corrigan</h3>
    </div>
  )
}

export default ProfileName;
