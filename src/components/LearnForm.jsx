import { useState } from "react";

export const LearnForm = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //   const handleFirstName = (e) => {
  //     setFirstName(e.target.value);
  //   };
  //   const handleLastName = (e) => {
  //     setLastName(e.target.value);
  //   };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Button Clicked", formData);
  };
  return (
    <>
      {/*  handle element one by one  */}
      {/* <form action="">
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />{" "}
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />{" "}
        <br />
        <br />
      </form> */}
      <form action="" onSubmit={handleFormSubmit}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
