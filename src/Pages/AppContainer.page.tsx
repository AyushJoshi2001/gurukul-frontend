import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import AssignmentPage from "./Assignment.page";
import ClassroomPage from "./Classroom.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/classroom">
          <ClassroomPage />
        </Route>
        <Route path="/assignment">
          <AssignmentPage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
