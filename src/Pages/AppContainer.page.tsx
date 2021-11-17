import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import ClassroomPage from "./Classroom.page";
import DashboardPage from "./Dashboard.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/classroom">
          <ClassroomPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
