import { useState } from "react";
//components
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Login from "./components/Login/Login";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import SignUp from "./components/Login/SignUp.js";
// import FooterPremium from "./components/Footer/FooterPremium";
import PremiumPage from "./components/PremiumFolder/PremiumPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

//routes
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"


function App() {
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
      location.pathname === "/signup" ||
      location.pathname === "/premium-page" ? null : (
        <Navbar />
      )}

        <AnimatePresence exitBeforeEnter >
      <Routes loaction={location} key={location.pathname}>
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
        <Route path="/premium-page" element={<PremiumPage />} />
      </Routes>
        </AnimatePresence>
      {<Footer />}
    </>
  );
}

export default App;
