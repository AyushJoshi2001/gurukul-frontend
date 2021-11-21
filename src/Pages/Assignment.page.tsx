import { FC, memo } from "react";
import "../css/assignmentPage.css";
import dummy from "../img/classroom.jpg";
import ClassCommentTextarea from "../component/ClassCommentTextarea";
import AssignmentSubmission from "../component/AssignmentSubmission";

interface Props {}

const Assignment: FC<Props> = (props) => {
  return (
    <div className="flex max-w-6xl mx-auto mt-10 space-x-5">
      <div className="flex-1 p-5 shadow-2xl rounded-xl">
        <div id="parent-head ">
          <div className="head-section">Fullstack Practical-14</div>
          <div className="info">
            <p>Pankaj Kapoor (Month Date)</p>
          </div>
          <div className="flex justify-between marks">
            <p>100 points</p>
            <div className="flex items-center">
              <p className="text-base text-gray-400">Due Month Date</p>
            </div>
          </div>
        </div>

        <div id="content-container">
          <div className="heading">
            Create a Counter Page using JavaScript as per the attached
            Templates.
          </div>
          <p>Instructions:</p>
          <p>instruction text</p>
        </div>

        <div id="lowerDivForPost">
          <div className="image-div1">
            <img src={dummy} alt="Assginment" />
          </div>
          <div id="image-rightDiv">
            <h1>Pracital-15.png</h1>
            <p>image file</p>
          </div>
        </div>

        <ClassCommentTextarea className="mt-3" />
      </div>

      <div>
        <AssignmentSubmission />
      </div>
    </div>
  );
};

Assignment.defaultProps = {};

export default memo(Assignment);
