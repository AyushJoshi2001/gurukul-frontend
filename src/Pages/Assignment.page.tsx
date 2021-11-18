import { FC, memo } from "react";
import "../css/assignmentPage.css";
import {IoMdSend} from "react-icons/io";

import dummy from "../img/classroom.jpg"

interface Props {}

const Assignment: FC<Props> = (props) => {
  return (
    <div id="content">
      <div id="parent-head">
        <div className="head-section">Fullstack Practical-14</div>
        <div className="info">
          <p>Pankaj Kapoor (Month Date)</p>
        </div>
        <div className="marks">
          <p>100 points</p>
          <div className="due-date">Due Month Date</div>
        </div>
      </div>

      <div id="content-container">
        <div className="heading">
          Create a Counter Page using JavaScript as per the attached Templates.
        </div>
        <ol>
          <li>Instructions:</li>
          <li>
            - Students have to create a Counter with Functionality of Increment
            and Decrement as per attached screenshot.
          </li>
          <li>
            - ' +' Button will increment the counter, '-' Button will decrement
            the counter. On Value 0, ' - ' Button will Disabled.
          </li>
          <li>
            - Students have to share Output Screen Shot, JavaScript code and
            Link of the live page in private comment section.
          </li>
          <li>
            - Students have to share Output Screen Shot, JavaScript code and
            Link of the live page in private comment section.
          </li>
          <li>- Update index.html for practical-14 also.</li>
          <li>- follow the instructions properly to get the marks</li>
          <li>- Refer to the attachment.</li>
        </ol>
      </div>

      <div id="lowerDivForPost">
                <div className="image-div1"><img src={dummy} alt="Assginment-image" /></div>
                <div id="image-rightDiv"><h1>Pracital-15.png</h1>
                    <p>image file</p>
                </div>
      </div>

      <div id="CommentDiv">
                    <textarea  placeholder="Add your comment here" />
                    <div className="flex items-center mx-auto">
                        <IoMdSend className="w-7 h-7"/>
                    </div>
                    </div>
    </div>
  );
};

Assignment.defaultProps = {};

export default memo(Assignment);
