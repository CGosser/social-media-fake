import React from "react";

function AboutMe(props){

  const aboutMeStyles= {
    // width: '100%',
    border: '2px solid lightgray',
    padding: '20px',
    marginTop: '20px'
  }
  return (
    <div style={aboutMeStyles}>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"</p>
    </div>
  );
}

export default AboutMe;
