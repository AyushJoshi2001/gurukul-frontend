import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthContext from "./context/auth.context";
import { User } from "./models/User";
import AppContainerPage from "./Pages/AppContainer.page";
import AuthPage from "./Pages/Auth.page";
import PageNotFoundPage from "./Pages/PageNotFound.page";
import { ImSpinner9 } from "react-icons/im";
import { TOKEN_ID } from "./api/auth";
import ClassContext from "./context/class.context";
import { Class } from "./models/Class";

function App() {
  const [user, setUser] = useState<User>();
  const [classroom, setClassroom] = useState<Class[]>([]);
  const token = localStorage.getItem(TOKEN_ID);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u !== null) {
        // console.log("user: ", u);
        setUser(u);
      }
    });
  }, []);

  if (token && !user) {
    return (
      <div className="flex items-center justify-center min-w-full min-h-screen">
        <ImSpinner9 className="w-20 h-20 text-blue-500 animate-spin " />
      </div>
    );
  }

  return (
    <ClassContext.Provider value={{ classroom, setClassroom }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/classroom" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/classroom" /> : <AuthPage />}
            </Route>
            <Route path={["/classroom", "/dashboard", "/assignment"]} exact>
              {user ? <AppContainerPage /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <PageNotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </ClassContext.Provider>
  );
}

export default App;
