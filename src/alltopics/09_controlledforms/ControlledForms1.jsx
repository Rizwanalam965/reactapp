import React, { useState } from "react";

const ControlledForms1 = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleUsername = (e) => setUsername(e.target.value);
  let handleEmail = (e) => setEmail(e.target.value);
  let handlePassword = (e) => setPassword(e.target.value);

  let formHandle = (e) => {
    e.preventDefault();
    console.log({username, email, password});
    // clearing input fields
    setUsername("")
    setEmail("")
    setPassword("")
  };

  return (
    <div>
      <h1>ControlledForms1</h1>

      <form onSubmit={formHandle}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <label htmlFor="email">Email :</label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
