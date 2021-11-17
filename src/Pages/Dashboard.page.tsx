import { FC, memo } from "react";
import PostWithComment from "../component/PostWithComment";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return <div className="m-10">
    <PostWithComment />
  </div>;
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
