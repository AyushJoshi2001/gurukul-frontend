import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import Navbar from "../component/Navbar";
import AssignmentPage from "./Assignment.page";
import ClassroomPage from "./Classroom.page";
import DashboardPage from "./Dashboard.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Switch>
          <Route path="/classroom">
            <ClassroomPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/assignment">
            <AssignmentPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
