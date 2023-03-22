import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
//import LoggedOutPage from "./components/logged-out/LoggedOutPage";
import LoggedInPage from "./components/logged-in/LoggedInPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      {/*<LoggedOutPage />*/}
      <LoggedInPage />
    </div>
  );
}

export default App;
