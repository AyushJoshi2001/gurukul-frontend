import { FC, memo } from "react";

interface Props {}

const Assignment: FC<Props> = (props) => {
  return (
    <div>
      Assignment page code will be inside this div and check output at
      "localhost:3000/assignment" url.
    </div>
  );
};

Assignment.defaultProps = {};

export default memo(Assignment);
