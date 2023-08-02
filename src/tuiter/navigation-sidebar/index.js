import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCompass, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";

const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [, , active] = pathname.split("/");

 const links = [
   { name: "home", icon: FaHome },
   { name: "explore", icon: FaCompass },
   { name: "notifications", icon: FaBell },
   { name: "messages", icon: FaEnvelope },
   { name: "bookmarks", icon: FaBookmark },
   { name: "lists", icon: FaList },
   { name: "profile", icon: FaUser },
   { name: "more", icon: FaEllipsisH }
 ];

 return (
   <div className="list-group">
     {links.map((linkObj) => (
       <Link
         to={`/tuiter/${linkObj.name}`}
         className={`list-group-item text-capitalize ${
           active === linkObj.name ? "active" : ""
         }`} 
         key={linkObj.name}
       >
         {React.createElement(linkObj.icon, { className: "me-2" })}
         {linkObj.name}
       </Link>
     ))}
   </div>
 );
};

export default NavigationSidebar;
