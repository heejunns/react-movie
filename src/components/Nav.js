import React from "react";
import { Link } from "react-router-dom";
import styled from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={styled.layout}>
      <div>
        <Link to={"/"} className={styled.homelink}>
          <span>A</span>
          <span>c</span>
          <span>h</span>
          <span>a</span> <span></span> <span></span>
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
            Animation{" "}
          </Link>
        </li>
        <li>
          <Link to={`/${"adventure"}`} className={styled.link}>
            Adventure
          </Link>
        </li>
        <li>
          <Link to={`/${"comedy"}`} className={styled.link}>
            Comedy
          </Link>
        </li>
        <li>
          <Link to={`/${"drama"}`} className={styled.link}>
            Drama
          </Link>
        </li>
        <li>
          <Link to={`/nowmovie`} className={styled.link}>
            Now
          </Link>
        </li>
        <li>
          <Link to={`/upcoming`} className={styled.link}>
            Upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
