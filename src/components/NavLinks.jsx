import React from "react";
import PropTypes from "prop-types";

function NavLinks(props){
  const navLinksStyles= {
  display: 'flex',
  listStyle: 'none'
  }
  const linkStyles= {
    marginRight: '10px',
    border: '1px solid black',
    padding: '5px'
  }
  return (
    <ul style={navLinksStyles}>
      <li style={linkStyles}>Home</li>
      <li style={linkStyles}>Notifications</li>
      <li style={linkStyles}>Messages</li>
    </ul>
  );
}

// NavLinks.propTypes = {
//   link: PropTypes.string.isRequired
// }


export default NavLinks;

// import React from "react";
// import PropTypes from "prop-types";
//
// function NavLinks(props){
//   return (
//     <li>{props.link}</li>
//   );
// }
//
// NavLinks.propTypes = {
//   link: PropTypes.string.isRequired
// }
//
//
// export default NavLinks;
