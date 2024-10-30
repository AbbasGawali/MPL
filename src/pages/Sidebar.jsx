import React, { useState } from "react";
import "./AdminDesign/Sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#adminhome">Admin Home</a>
            </li>
            <li>
              <a href="#allplayers">All Register Players</a>
            </li>
            <li>
              <a href="#liveauction">Live Auction Page</a>
            </li>
            <li>
              <a href="#finalteamplayers">Final Teams Players</a>
            </li>
            <li>
              <a href="#addmatches">Add Upcoming Matches</a>
            </li>
            <li>
              <a href="#addupdate">Add Update Info</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Menu
      </div>
    </>
  );
};
