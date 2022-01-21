import React from 'react';

const SignUp = ({signUp, user, password}) => {
  return (
    <>
    <h1>Sign Up To Recipes With Frank For Free Here! </h1>
      <p>All we need is a preffered username and password. That's it! :)</p>
    <form onSubmit={(e) => signUp(e, user, password)}>
      
    <label>
      Username:
      <input  type="text" name="name" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>

    <input type="submit" value="Submit" />
  </form>
  </>
  );
};

export default SignUp;