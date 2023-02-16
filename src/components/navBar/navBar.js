import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { FaInfoCircle, FaRegWindowClose } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { GrClose, GrMenu } from "react-icons/gr";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuClick, setMenuClick] = useState(false);

  const handleClick = () => {
    setMenuClick(!menuClick);
  }

  const menuItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
      cName: "navLinks",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      title: "About",
      url: "/about",
      cName: "navLinks",
      icon: <FaInfoCircle />,
    },
    {
      id: 3,
      title: "Service",
      url: "/service",
      cName: "navLinks",
      icon: <MdHomeRepairService />,
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
      cName: "navLinks",
      icon: <RiContactsBookFill />,
    },
    {
      id: 5,
      title: "Sign Up",
      url: "/signup",
      cName: "navLinksMobile",
    },
  ];

  return (
    <nav className="navBarItems">
      <h1 className="navBarLogo"> Tourism </h1>
      <div className="menuIcons" onClick={()=>handleClick()}>
        {menuClick ? (
          <GrClose className="smallScreenIcon" />
        ) : (
          <GrMenu className="smallScreenIcon" />
        )}
      </div>
      <ul className={menuClick ? "navMenu active" : "navMenu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={item.id}>
              <Link to={item.url} className={item.cName}>
                {" "}
                {item.icon} {item.title}{" "}
              </Link>
            </li>
          );
        })}
        <button className="signUpBtn"> Sign Up </button>
      </ul>
    </nav>
  );
}

export default NavBar;
