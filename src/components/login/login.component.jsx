import React from "react";

const FormElement = ({ label, type, name, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} />
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
const FormComponent = () => {
  return (
    <>
      {formElements.map((element) => {
        return <FormElement {...element} />;
      })}
    </>
  );
};

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <FormComponent />
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
