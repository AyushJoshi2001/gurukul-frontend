import { FC, memo } from "react";
import Announcement from "../component/Announcement";
import PostWithComment from "../component/PostWithComment";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <div>
      <div className="mt-10">
        <div className="relative w-4/5 mx-auto bg-center bg-cover h-72 rounded-xl bg-dashboard_background">
          <p className="absolute text-5xl font-semibold text-white left-8 bottom-8">
            DUMMY CLASS
          </p>
        </div>
      </div>
      <div className="mt-10">
        <PostWithComment />
      </div>

      <div className="my-10">
        <Announcement />
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
