import React from "react";
import { Link } from "react-router-dom";
import styled from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={styled.layout}>
      <div>
        <Link to={"/"} className={styled.homelink}>
          Home
        </Link>
      </div>
      <ul className={styled.nav}>
        <li>
          <Link to={`/${"action"}`} className={styled.link}>
            {" "}
            Action
          </Link>
        </li>
        <li>
          <Link to={`/${"animation"}`} className={styled.link}>
            animation{" "}
          </Link>
        </li>
        <li>
          <Link to={`/${"adventure"}`} className={styled.link}>
            Adventure
          </Link>
        </li>
        <li>
          <Link to={`/${"drama"}`} className={styled.link}>
            Drama{" "}
          </Link>
        </li>
        <li>
          <Link to={`/${"history"}`} className={styled.link}>
            History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
