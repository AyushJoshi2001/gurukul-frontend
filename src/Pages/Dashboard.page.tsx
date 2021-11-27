import { FC, memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getClasses } from "../api/backendApi";
import AddAnnouncement from "../component/AddAnnouncement";
import Announcement from "../component/Announcement";
import AuthContext from "../context/auth.context";
import ClassContext from "../context/class.context";
import RoleContext from "../context/role.context";
import { Class } from "../models/Class";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const { secretCode } = useParams<any>();
  const classCode = parseInt(secretCode);
  const [class_, setClass_] = useState<Class>({});
  const { user } = useContext(AuthContext);
  const { setClassroom } = useContext(ClassContext);
  const { role } = useContext(RoleContext);
  // console.log("dashboard: ", secretCode);

  useEffect(() => {
    const id = user!.uid;
    if (role) {
      getClasses(id).then((response: any) => {
        // console.log(response.data.listOfClasses);
        setClassroom(response.data.listOfClasses);

        const x: Class[] = response.data.listOfClasses;
        const c: Class[] = x.filter((cl) => {
          return cl.secretCode === classCode;
        });
        if (c.length > 0) {
          setClass_(c[0]);
        }
      });
    }
  }, [role]); // eslint-disable-line

  return (
    <div>
      <div className="mt-10">
        <div className="relative max-w-5xl mx-auto bg-center bg-cover h-72 rounded-xl bg-dashboard_background">
          <p className="absolute text-5xl font-semibold text-white left-8 bottom-8">
            {class_!.title}
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <AddAnnouncement />
      </div>

      {/* <div className="mt-10">
        <PostWithComment />
      </div> */}

      <div className="pt-10">
        <Announcement />
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
