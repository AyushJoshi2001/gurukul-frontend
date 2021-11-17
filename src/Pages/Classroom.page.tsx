import { FC, memo } from "react";
import ClassCard from "../component/ClassCard";

interface Props {}

const Classroom: FC<Props> = (props) => {
  return (
    <div>
      <ClassCard />
    </div>
  );
};

Classroom.defaultProps = {};

export default memo(Classroom);
