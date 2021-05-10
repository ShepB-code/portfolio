import React from "react";
import { Link } from "gatsby";
import "../styles/navbar.scss";

import back from "../illustrations/backing.svg"
export const NavBar = () => {
    return (
        <header>
             <Link id="home-link-one" to="/">
                 <h1>shep.</h1>
             </Link>

            <nav>
                <ul>
                    <li>
                        <Link to="/404" className="links" style={{backgroundColor: "#6C63FF"}}>
                            about 
                        </Link> 
                    </li>
                    <li>
                        <Link to="/404" className="links" style={{backgroundColor: "#80DEA0"}}>
                            projects 
                        </Link>
                    </li>
                    <li>
                        <Link to="/404" className="links" style={{backgroundColor: "#FF9DB1"}}>
                             contact 
                        </Link>
                    </li>
                </ul>
            </nav>

      </header>
        // <nav id="navbar">
        //     <div id="home-link">

        //     <Link id="home-link-one" to="/">
        //         <strong>shep.</strong>
        //     </Link>
                    
                
                
        //     </div>


        //     <div id="other-links">
        //         <Link to="/404" className="links" style={{backgroundColor: "#6C63FF"}}>
        //            about 
        //         </Link> 
        //         <Link to="/404" className="links" style={{backgroundColor: "#80DEA0"}}>
        //            projects 
        //         </Link> 
        //         <Link to="/404" className="links" style={{backgroundColor: "#FF9DB1"}}>
        //            contact 
        //         </Link>
        //     </div>
           
        // </nav>    
    )
}