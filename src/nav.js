import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const [, , active] = pathname.split("/");

  const [showLabs, setShowLabs] = useState(false);

  const toggleLabs = () => {
    setShowLabs(!showLabs);
  };

  const labLinks = [
    { name: "Assignment 3", path: "/labs/a3" },
    { name: "Assignment 4", path: "/labs/a4" }
  ];

  return (
    <nav className="nav nav-tabs mb-2">
      <Link className={`nav-link ${active === "hello" ? "active" : ""}`} to="/hello">Hello</Link>
      <Link className={`nav-link ${active === "tuiter" ? "active" : ""}`} to="/tuiter/home">Tuiter</Link>
      <button className={`nav-link ${active === "labs" ? "active" : ""}`} onClick={toggleLabs}>
        Labs
      </button>
      {showLabs && (
        <div className="nav nav-pills mt-2">
          {labLinks.map((labLink) => (
            <Link
              key={labLink.path}
              className={`nav-link ${active === labLink.path.slice(1) ? "active" : ""}`}
              to={labLink.path}
            >
              {labLink.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
