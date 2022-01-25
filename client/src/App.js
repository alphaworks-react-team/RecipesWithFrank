import { useState } from "react";
import { useNavigate } from "react-router-dom";
//components

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Login from "./components/Login/Login";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
//routes
import { Routes, Route } from "react-router-dom";

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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);
  const [authError, setAuthError] = useState(false);

  const getUser = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
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
    }
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedPassword = JSON.parse(localStorage.getItem("password"));
    if (savedUser !== user && savedPassword !== password) {
      setAuthError(true);
      alert("please sign up first");
    } else if (savedUser === user && savedPassword === password) {
      setAuthError(false);
      setAuth(true);
      document.querySelector(".username").value = "";
      document.querySelector(".password").value = "";
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
              username={username}
            />
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
