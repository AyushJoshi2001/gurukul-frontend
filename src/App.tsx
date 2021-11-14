import { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthContext from "./context/auth.context";
import { User } from "./models/User";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import PageNotFoundPage from "./Pages/PageNotFound.page";

function App() {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
    </AuthContext.Provider>
  );
}

export default App;
