import { FC, memo } from "react";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return <div>dashboard page.</div>;
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
