import React from "react";
import NavLinks from "./NavLinks";

function Navigation(props){
  const navigationStyles = {
    width: '50%'
    }
  return (
    <div style={navigationStyles}>
      <NavLinks/>
    </div>
  );
}

export default Navigation;





// import React from "react";
// import NavLinks from "./NavLinks";
//
// function Navigation(){
//   const links = ["Home", "Notifications", "Messages"];
//   const linkStyles= {
//       marginRight: '10px',
//       border: '1px solid black',
//       padding: '5px'
//     }
//   return (
//     <div>
//       <NavLinks
//         link= {links.map(function(link, index) {
//           return <li key={index} style={linkStyles}>{link}</li>;
//         })}
//         />
//     </div>
//   );
// }
//
// export default Navigation;
