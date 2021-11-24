import { FC, memo, useContext, useEffect } from "react";
import { getClasses } from "../api/backendApi";
import ClassCard from "../component/ClassCard";
import AuthContext from "../context/auth.context";
import ClassContext from "../context/class.context";
import RoleContext from "../context/role.context";

interface Props {}

const Classroom: FC<Props> = (props) => {
  const { classroom, setClassroom } = useContext(ClassContext);
  const { role } = useContext(RoleContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const id = user!.uid;
    if (role) {
      getClasses(id).then((response: any) => {
        console.log(response.data);
        setClassroom(response.data);
      });
    }
  }, [role]); // eslint-disable-line

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
