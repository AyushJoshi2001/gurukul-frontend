import { FC, memo } from "react";
import ClassCard from "../component/ClassCard";
import Navbar from "../component/Navbar";

interface Props {}

const Classroom: FC<Props> = (props) => {
  return (
    <div>
      <Navbar />
      <ClassCard />
    </div>
  );
};

Classroom.defaultProps = {};

export default memo(Classroom);
