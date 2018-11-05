import React from "react";
import PropTypes from "prop-types";

function NavLinks(props){
  const navLinksStyles= {
  display: 'flex',
  listStyle: 'none'
  }
  const linkStyles= {
    // marginRight: '10px',
    border: '2px solid lightgray',
    padding: '15px'
  }
  return (
    <ul style={navLinksStyles}>
      <li style={linkStyles}>Home</li>
      <li style={linkStyles}>Notifications</li>
      <li style={linkStyles}>Messages</li>
    </ul>
  );
}

export default NavLinks;









// import React from "react";
// import PropTypes from "prop-types";
//
// function NavLinks(props){
//   const navLinksStyles= {
//     display: 'flex',
//     listStyle: 'none'
//     }
//   return (
//     <ul style={navLinksStyles}>{props.link}</ul>
//   );
// }
//
// NavLinks.propTypes = {
//   link: PropTypes.array
// }
//
//
// export default NavLinks;
