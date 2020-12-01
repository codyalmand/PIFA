import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import Posts from "./pages/Posts.js";
import LandingPage from "./pages/LandingPage.js";
// import Navbar from "./components/Navbar.js";
import LearnMore from "./pages/LearnMore.js"

function App() {
  return (
    <Router>
      {/* <Navbar />  */}
        <LandingPage />
          <Route exact path="/" pages={LandingPage} />
          <Route exact path="/Login" pages={Login} />
          <Route exact path="/Register" pages={Register} />
          <Route exact path="/Profile" pages={Profile} />
          <Route exact path="/Posts" pages={Posts} />
          <Route path="/LearnMore" pages={LearnMore} />
    </Router>
  );
}

export default App;
