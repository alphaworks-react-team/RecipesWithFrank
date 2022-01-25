import { useState } from "react";
//components

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Login from "./components/Login/Login";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import SignUp from "./components/Login/SignUp.js";
import FooterPremium from "./components/Footer/FooterPremium";
import Footer from "./components/Footer/Footer";
//routes
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import "./App.css";
//utilities

// import {
//   getRecipe,
//   getRecipeBySearch,
//   getIngredientsByRecipeId,
// } from "./utils";
// import Search from "./components/Search/Search";

function App(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);
  const [authError, setAuthError] = useState(false);

  const getUser = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };

  const getPassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const authUser = (e) => {
    e.preventDefault();
    // navigate("/");
    if (!user || !password) {
      setAuthError(true);
      console.log("hey sign up");
    }
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedPassword = JSON.parse(localStorage.getItem("password"));
    if (savedUser !== user && savedPassword !== password) {
      setAuthError(true);
      alert("please sign up");
      navigate("/signup");
    } else if (savedUser === user && savedPassword === password) {
      setAuthError(false);
      setAuth(true);
      console.log(user, password);
      navigate("/");
    }
  };

  const showErr = (authError) => {
    if (authError) {
      console.log("not authorized");
    }
    return null;
  };

  const signUp = (e, user, password) => {
    e.preventDefault();
    if (!user || !password) {
      setAuthError(true);
    }
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("password", JSON.stringify(password));
    navigate("/login");
    // document.getElementById("user").value = ""
    // document.getElementById("password").value = ""
  };

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
        <Navbar />
      )}
      <Routes>
        <Route
          exact
          path="/signup"
          element={
            <SignUp
              getUser={getUser}
              getPassword={getPassword}
              user={user}
              password={password}
              authUser={authUser}
              user={user}
              signUp={signUp}
            />
          }
        />

        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              getUser={getUser}
              getPassword={getPassword}
              user={user}
              password={password}
              authUser={authUser}
              user={user}
            />
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <FooterPremium />
      <Footer />
    </>
  );
}

export default App;
