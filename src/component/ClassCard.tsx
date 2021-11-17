import { FC, memo } from "react";
import { ImProfile } from "react-icons/im";
import { BiFolder } from "react-icons/bi";

interface Props {
  nameOfClass?: string;
  classDescription?: string;
  groupCreator?: string;
}

const ClassCard: FC<Props> = (props) => {
  return (
    <div className="max-w-xs m-5 overflow-hidden border border-gray-400 rounded-lg">
      <div className="flex flex-col p-5 space-y-1 text-white bg-gray-600">
        <p className="text-2xl">Name of Class</p>
        <p className="text-base">Class description</p>
        <p className="text-base">Name of creater</p>
      </div>

      <div>
        {/* list of assignments */}
        <p>due date</p>
        <p>name of assignment</p>
      </div>

      <div className="flex">
        <ImProfile />
        <BiFolder />
      </div>
    </div>
  );
};

ClassCard.defaultProps = {};

export default memo(ClassCard);
