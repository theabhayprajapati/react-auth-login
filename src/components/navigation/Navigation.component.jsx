import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";

const mapLink = (link) => {
  return (
    <Link
      to={link.to}
      onClick={link.onClick ? link.onClick : () => {}}
      key={link.to}
    >
      {/* <button> {link.text} </button> */}
      <button>{link.text}</button>
    </Link>
  );
};
const links = [
  {
    to: "/",
    text: "home",
  },
  {
    to: "/login",
    text: "login",
  },
  {
    to: "/dashboard",
    text: "dashboard",
  },
  {
    to: "/register",
    text: "register",
  },
];
const Navigation = () => {
  const currentUser = true;
  const { logOutUser } = React.useContext(UserContext);
  const signOutUser = () => {
    logOutUser(); 
  };

  return (
    <div className="container">
      {/* login/ dashboard */}
      <div>
        <nav className="nav-container">
          {links.map((link) => {
            if (link.to === "/login" && currentUser) {
              link.onClick = () => signOutUser();
              return mapLink(link);
            }
            return mapLink(link);
          })}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
