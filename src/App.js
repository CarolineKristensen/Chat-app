import Navigation from "./components/Navigation";
import Main from "./components/Main";
import LoggedOutPage from "./components/logged-out/LoggedOutPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <LoggedOutPage />
    </div>
  );
}

export default App;
