import Navigation from "./components/Navigation";
import Main from "./components/Main";
import LoginPage from "./components/logged-out/LoginPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <LoginPage />
    </div>
  );
}

export default App;
