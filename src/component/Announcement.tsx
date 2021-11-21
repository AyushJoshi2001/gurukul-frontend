import { FC, memo } from "react";
import { FaClipboardList } from "react-icons/fa";

interface Props {}

const Announcement: FC<Props> = (props) => {
  return (
    <div className="flex max-w-5xl px-10 py-3 mx-auto space-x-5 border border-gray-500 hover:bg-gray-100 rounded-xl">
      <div className="inline-block p-3 bg-gray-500 rounded-full">
        <FaClipboardList className="text-white w-7 h-7" />
      </div>
      <p className="flex items-center text-lg ">
        Pankaj Kapoor posted a new assignment: Fullstack -1 Final End Term
        Practical [2021]
      </p>
    </div>
  );
};

Announcement.defaultProps = {};

export default memo(Announcement);
