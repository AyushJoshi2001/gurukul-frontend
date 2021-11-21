import { FC, memo } from "react";

interface Props {}

const AssignmentSubmission: FC<Props> = (props) => {
  return (
    <div className="flex flex-col p-5 border border-gray-400 shadow-2xl rounded-xl">
      <p className="text-2xl font-semibold">Your Work</p>
      <input type="file" className="pt-10" />
      <button
        type="submit"
        className="px-5 py-2 mt-10 text-white bg-gray-700 rounded-lg hover:bg-gray-400"
      >
        Submit
      </button>
    </div>
  );
};

AssignmentSubmission.defaultProps = {};

export default memo(AssignmentSubmission);
