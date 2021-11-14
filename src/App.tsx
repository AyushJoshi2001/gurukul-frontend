import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path={["/login", "/signup"]} exact>
          <AuthPage />
        </Route>
        <Route>
          <p>Page not found</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
