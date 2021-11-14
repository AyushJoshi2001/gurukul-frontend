import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import PageNotFoundPage from "./Pages/PageNotFound.page";

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
        <Route path={["/classroom", "/assignment"]} exact>
          <AppContainerPage />
        </Route>
        <Route>
          <PageNotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
