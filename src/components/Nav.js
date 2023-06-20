import React from "react";
import { Link } from "react-router-dom";
import styled from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={styled.layout}>
      <div>
        <Link to={process.env.PUBLIC_URL + "/"} className={styled.homelink}>
          <span>A</span>
          <span>c</span>
          <span>h</span>
          <span>a</span> <span></span> <span></span>
        </Link>
      </div>
      <ul className={styled.nav}>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/${"action"}`}
            className={styled.link}
          >
            {" "}
            Action
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/${"animation"}`}
            className={styled.link}
          >
            Animation{" "}
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/${"adventure"}`}
            className={styled.link}
          >
            Adventure
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/${"comedy"}`}
            className={styled.link}
          >
            Comedy
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/${"drama"}`}
            className={styled.link}
          >
            Drama
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/nowmovie`}
            className={styled.link}
          >
            Now
          </Link>
        </li>
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/upcoming`}
            className={styled.link}
          >
            Upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
