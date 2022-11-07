import React from "react";
import { register } from "../../utils/backend/login.backend";

const FormElement = ({ label, type, name, id, user, setUser }) => {
  const handleInputUpdate = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={user[name]}
        onChange={handleInputUpdate}
      />
    </div>
  );
};
const formElements = [
  {
    label: "Name",
    type: "text",
    name: "name",
    id: "name",
  },
  {
    label: "username",
    type: "text",
    name: "username",
    id: "username",
  },
  {
    label: "Gender",
    type: "text",
    name: "gender",
    id: "gender",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
  {
    label: "Hobbies",
    type: "text",
    name: "hobbies",
    id: "hobbies",
  },
];
const FormComponent = ({ user, setUser }) => {
  return (
    <>
      {formElements.map((element) => {
        return (
          <FormElement
            key={element.id}
            {...element}
            user={user}
            setUser={setUser}
          />
        );
      })}
    </>
  );
};

const LoginForm = () => {
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    password: "",
    email: "",
    hobbies: "",
    gender: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(user);
    console.log("Submitted");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <FormComponent user={user} setUser={setUser} />
        <div>
          <button>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
