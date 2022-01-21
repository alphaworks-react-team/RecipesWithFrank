import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SignUp = ({signUp, user, password, getPassword, getUser}) => {
  const navigate = useNavigate()
  return (
    <>
    <h1>Welcome to Recipes With Frank</h1>
      <p>Frank is a world renowned chef, trained by Gordan Ramsey himself. Frank has perfected many dishes, while creating his own one of a kind dishes, winning awards for <i>Most Creative Dish</i>, and <i>Best Glizzy Award</i>. Sign Up now and you too, will create the best of the best dish your pallet has never before tasted! </p>

    <form onSubmit={(e) => signUp(e, user, password)}>
      
    <label>
      Username:
      <input id="user" type="text" name="name" onChange={getUser} />
    </label>
    <label>
      Password:
      <input id="password" type="password" name="password" onChange={getPassword}/>
    </label>

    <input type="submit" value="Submit" />
  </form>
  <p>Already a member with us?</p>
  {/* <button>login</button> */}
  </>
  );
};

export default SignUp;