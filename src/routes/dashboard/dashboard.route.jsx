import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";

/* 

name, email, username, hobbies, gender
*/
const Dashboard = () => {
  const { currentUser } = React.useContext(UserContext);
  /* useNavigate */
  return (
    <div>
      <h1>Dashboard</h1>
      <main>
        {currentUser ? (
          <div>
            <h2>Profile </h2>
            <p>Name: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
            <p>Username: {currentUser.username}</p>
            <p>Hobbies: {currentUser.hobbies}</p>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
