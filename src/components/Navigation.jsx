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
//   return (
//     <div>
//       <NavLinks
//         link= links.map(link => {
//           return link;
//         });
//         />
//     <h1>Nav works</h1>
//     </div>
//   );
// }
//
// export default Navigation;
