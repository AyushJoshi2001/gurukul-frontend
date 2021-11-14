import { FC, memo } from "react";

interface Props {}

const Classroom: FC<Props> = (props) => {
  return <div className="text-4xl">classroom page</div>;
};

Classroom.defaultProps = {};

export default memo(Classroom);
