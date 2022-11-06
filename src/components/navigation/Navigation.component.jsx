import React from "react";
import { Link, Outlet } from "react-router-dom";

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
];
const Navigation = () => {
  const currentUser = true;
  const signOutUser = () => {
    console.log("Sign out user");
  };

  return (
    <div>
      {/* login/ dashboard */}
      <>
        <nav>
          {links.map((link) => {
            if (link.to === "/login" && currentUser) {
              link.text = "logout";
              link.onClick = () => signOutUser();
              return mapLink(link);
            }
            return mapLink(link);
          })}
          <button>logout</button>
        </nav>
        <Outlet />
      </>
    </div>
  );
};

export default Navigation;
