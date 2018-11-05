import React from "react";

function ProfileStats(prop){
  const profileStatsStyles = {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    justifyContent: 'center'

  }

  const profileStatsListStyles = {
    padding: '10px'
  }
  return (
    <div>
      <ul style= {profileStatsStyles}>
        <li style= {profileStatsListStyles}>Tweets</li>
        <li style= {profileStatsListStyles}>Following</li>
        <li style= {profileStatsListStyles}>Followers</li>
      </ul>
    </div>
  )
}

export default ProfileStats;
