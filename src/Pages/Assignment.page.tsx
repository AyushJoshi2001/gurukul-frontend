import { FC, memo, useContext, useEffect, useState } from "react";
import "../css/assignmentPage.css";
import ClassCommentTextarea from "../component/ClassCommentTextarea";
import AssignmentSubmission from "../component/AssignmentSubmission";
import { useParams } from "react-router";
import AuthContext from "../context/auth.context";
import { fetchAnnouncementsDetails } from "../api/backendApi";
import RoleContext from "../context/role.context";
import { AnnouncementDetailsWithAssignment } from "../models/AnnouncementDetails";

interface Props {}

const Assignment: FC<Props> = (props) => {
  const { announcementId } = useParams<any>();
  const { user } = useContext(AuthContext);
  const { role } = useContext(RoleContext);
  const [announcementDetails, setAnnouncementDetails] =
    useState<AnnouncementDetailsWithAssignment>();

  useEffect(() => {
    const id = user!.uid;
    if (role) {
      fetchAnnouncementsDetails({ announcementId, uId: id }).then((res) => {
        setAnnouncementDetails(res.data);
        console.log(res.data);
      });
    }
  }, [role]); // eslint-disable-line

  return (
    <div>
      <div className="flex flex-col-reverse max-w-6xl mx-auto mt-10 space-x-0 space-y-20 md:flex-row md:space-x-5 md:space-y-0">
        <div className="flex-1 p-5 shadow-2xl rounded-xl">
          <div id="parent-head ">
            <div className="head-section">
              {announcementDetails!.announcement.msg}
            </div>
            <div className="flex justify-between marks">
              <p>100 points</p>
              <div className="flex items-center">
                <p className="text-base text-gray-400">
                  {announcementDetails!.announcement.dueDate.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>

          <div id="content-container">
            <div className="heading">
              <p>{announcementDetails!.announcement.message}</p>
            </div>
          </div>

          {/* <div id="lowerDivForPost">
          <div className="image-div1">
          <img src={dummy} alt="Assginment" />
          </div>
          <div id="image-rightDiv">
          <h1>Pracital-15.png</h1>
          <p>image file</p>
          </div>
        </div> */}

          <ClassCommentTextarea
            className="mt-3"
            uId={user!.uid}
            announcementId={announcementId}
          />
        </div>

        <div>
          <AssignmentSubmission />
        </div>
      </div>
    </div>
  );
};

Assignment.defaultProps = {};

export default memo(Assignment);
