import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/Login.page";
import SignupPage from "./Pages/Signup.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route>
          <p>Page not found</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
