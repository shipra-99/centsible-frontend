import React, { useState } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
// import logo from "../../../images/baseLogo.png";
import logoText from "../../../images/baseLogo.png";

export function  NavMenuToggle(){
	setTimeout(()=>{	
		let mainwrapper = document.querySelector("#main-wrapper");
		if(mainwrapper.classList.contains('menu-toggle')){
			mainwrapper.classList.remove("menu-toggle");
		}else{
			mainwrapper.classList.add("menu-toggle");
		}
	},200);
}

const NavHader = () => {
   const [toggle, setToggle] = useState(false);
   return (
      <div className="nav-header">
         <Link to="/" className="brand-logo">
            {/* <img className="logo-abbr" src={logo} alt="" /> */}
            <img className="logo-compact" src={logoText} alt="" />
            <img className="brand-title" src={logoText} alt="" style={{
    marginLeft: '20px',
    maxWidth: '200px',
    marginTop: '-35px'
  }} />
         </Link>

         <div className="nav-control" 
            onClick={() => {
               setToggle(!toggle)
               NavMenuToggle();
            }
            }
         >
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
