import { FC, memo } from "react";

interface Props {}

const Assignment: FC<Props> = (props) => {
  return <div className="text-4xl">Assignment page.</div>;
};

Assignment.defaultProps = {};

export default memo(Assignment);
