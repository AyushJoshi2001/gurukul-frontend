import { FC, memo } from "react";
import "../css/assignmentPage.css";
import dummy from "../img/classroom.jpg";
import ClassCommentTextarea from "../component/ClassCommentTextarea";

interface Props {}

const Assignment: FC<Props> = (props) => {
  return (
    <div id="content" className="max-w-2xl mx-auto">
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
          Create a Counter Page using JavaScript as per the attached Templates.
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
  );
};

Assignment.defaultProps = {};

export default memo(Assignment);
