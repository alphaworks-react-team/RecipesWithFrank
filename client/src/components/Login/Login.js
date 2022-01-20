import React, { useState, useEffect } from "react";

const Login = ({ getUser, getPassword, authUser}) => {



  return (
    <form
      onSubmit={authUser}
    >
      <label>
        Username:
        <input id="username"
          type="text"
          name="username"
          // value={user}
          onChange={getUser}
        />
      </label>
      <label>
        Password:
        <input id="password"
          type="password"
          name="password"
          // value={password}
          onChange={getPassword}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
