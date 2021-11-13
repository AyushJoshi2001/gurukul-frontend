import { FC, memo } from "react";

interface Props {}

const Signup: FC<Props> = (props) => {
  return <div className="text-red-500">signup page</div>;
};

Signup.defaultProps = {};

export default memo(Signup);
