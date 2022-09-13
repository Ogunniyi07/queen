// import React, { useState } from "react";
// import '../styles/Nav.css';
// // import { NavLink } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';


// const Nav = () => {
//   window.addEventListener("scroll", function () {
// //     // const navigation = document.querySelector(".navigation")
// //     // navigation.classList.toggle("active",window.scrollY > 100)
//   })

//   // Toggle Menu
//   const [Mobile, setMobile] = useState(false)
//   return (
//     <div className="nav">
//         <div className="logo">
//             <img src="./images/logo.png" alt=""/>
//         </div>
//         <div className="list">
//             <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Biography</a></li>
//                 <li><a href="#">Timeline</a></li>
//                 <li><a href="#">Gallery</a></li>
//                 <li><a href="#">Tribute</a></li>
//             </ul>
//         </div>
//         <div className='toggle' onClick={() => setMobile(!Mobile)}>
//             {Mobile ? <div className="close"><FaTimes /></div> : <div className="open"><FaBars  /></div>} 
//         </div>
//     </div>
//   );
// }

// export default Nav;



import React, { useState } from "react";
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav = () => {
  window.addEventListener("scroll", function () {
    // const navigation = document.querySelector(".navigation")
    // navigation.classList.toggle("active",window.scrollY > 100)
  })

  // Toggle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <div className="nav">
      <div className="nav-list">
        <div className="nav-logo">
          <div className="nav-logoo" to="/">
            <img src="./images/logo.png" alt=""/>
          </div>
        </div>
        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
          <li>
            <div className="nav-link" to="/">
              Home
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Biography">
            Biography
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Timeline">
            Timeline 
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Gallery">
            Gallery
            </div>
          </li>
          <li>
            <div className="nav-link" to="/Tribute">
            Tribute
            </div>
          </li>
        </ul>
        <div className='toggle' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <div className="close"><FaTimes /></div> : <div className="open"><FaBars  /></div>} 
        </div>
      </div>
    </div>
  );
}

export default Nav;