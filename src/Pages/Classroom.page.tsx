import { FC, memo, useContext, useEffect } from "react";
import { getClasses } from "../api/backendAuth";
import ClassCard from "../component/ClassCard";
import AuthContext from "../context/auth.context";
import ClassContext from "../context/class.context";

interface Props {}

const Classroom: FC<Props> = (props) => {
  const { classroom, setClassroom } = useContext(ClassContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const id = user!.uid;
    getClasses(id).then((response: any) => {
      // console.log(response.data);
      setClassroom(response.data);
    });
  }, []); // eslint-disable-line

  if (classroom.length === 0 || classroom !== undefined) {
    // console.log("classroom : ", classroom.length);
    return <div></div>;
  } else {
    return (
      <div>
        <ClassCard />
      </div>
    );
  }
};

Classroom.defaultProps = {};

export default memo(Classroom);
