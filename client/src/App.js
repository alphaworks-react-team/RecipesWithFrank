import { useState } from "react";
//components
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import SignUp from "./components/Login/SignUp.js";
import Footer from "./components/Footer/Footer";

//routes
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import "./App.css";
function App(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState();

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
    <NavBar />
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
              signUp={signUp}
            />
          }
        />

        <Route
          exact
          path="/"
          element={<Home setRecipeDetails={setRecipeDetails} />}
        />

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
            />
          }
        />

        <Route
          path="/recipes/:id"
          element={<RecipeDetails recipeDetails={recipeDetails} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
