import React from "react";
import { NavLink, redirect } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <div>
    <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">To-Do List</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="./Home" >Home</a></li>
                <li><a href="./Completed">Completed</a></li>
                <li><a href="./Pending">Pending</a></li>
            </ul>
        </div>
    </nav>
</div>
  );
}

export default Navbar;
