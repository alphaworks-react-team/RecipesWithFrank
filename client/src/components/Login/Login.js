import React, { useState, useEffect } from "react";
import {FormContainer} from './LogsStyles'
import { useParams } from "react-router-dom";

const Login = ({ getUser, getPassword, authUser}) => {
  

  return (
    <>
    <FormContainer>
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
    </FormContainer>
    </>
  );
};

export default Login;
