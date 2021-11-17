import { FC, memo } from "react";
import { ImProfile } from "react-icons/im";
import { BiFolder } from "react-icons/bi";
import dummyProfileImg from "../img/dummy_profile.webp";

interface Props {
  nameOfClass?: string;
  classDescription?: string;
  groupCreator?: string;
}

const ClassCard: FC<Props> = (props) => {
  return (
    <div
      className="relative flex flex-col max-w-xs m-5 overflow-hidden border border-gray-400 rounded-lg shadow-md hover:shadow-2xl"
      style={{ minWidth: "280px" }}
    >
      <div className="flex flex-col p-5 space-y-1 text-white bg-gray-600">
        <p className="text-2xl">Name of Class</p>
        <p className="text-base">Class description</p>
        <p className="text-base">Name of creater</p>
      </div>

      <img
        src={dummyProfileImg}
        className="absolute w-16 h-16 bg-blue-500 rounded-full right-5 top-24"
        alt=""
      />

      <div className="p-5 h-36">
        {/* list of assignments */}
        <p className="text-gray-400">due date</p>
        <p>name of assignment</p>
      </div>

      <div className="flex justify-end px-5 py-3 space-x-2 border-t border-gray-400">
        <ImProfile className="w-7 h-7" />
        <BiFolder className="w-7 h-7" />
      </div>
    </div>
  );
};

ClassCard.defaultProps = {};

export default memo(ClassCard);
